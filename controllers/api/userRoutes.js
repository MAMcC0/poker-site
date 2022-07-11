const router = require('express').Router();
const { User } = require('../../models');

router.put('/:id', (req, res) => {
  User.update(
    {
      wallet: req.body.wallet
    }
    {
      where: {
        id: req.body.id
      },
    }
  )
    .then((walletAmnt) => {
      res.json(walletAmnt)
    })
    .catch((err) => res.json(err));
});

router.put('/:id', (req, res) => {
  User.update(
    {
      name: req.body.name,
      email: req.body.email,
      user_name: req.body.user_name,
      password: req.body.password,
    },
    {
      where: {
        id: req.body.id
      },
    }
  )
    .then((updatedUser) => {
      res.json(updatedUser);
    })
    .catch((err) => res.json(err));
});

router.delete('/:id', (req, res) => {
  User.destroy({
    where: {
      id:req.body.id
    },
  })
    .then((deletedUser) => {
      res.json(deletedUser);
    })
    .catch((err) => res.json(err));
});

router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
