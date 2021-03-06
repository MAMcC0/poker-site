import express from "express";
const router = express.Router();
import  User  from '../../models/User.js';
import withAuth from "../../utils/auth.js";

router.get('/', withAuth, async (req, res) => {
  try {
    const userGame = await User.findByPk( req.session.user_id, 
      {
      attributes: ['rank', 'wallet'],
      
    })
    const user = userGame.get({plain:true})
    console.log(user)
    res.render('homepage', {...user,logged_in:true})
    
  } catch (err) {
    res.status(500).json(err);
  } 
});

router.get('/data', withAuth, async (req, res) => {
  try {
    const userGame = await User.findByPk( req.session.user_id, 
      {
      attributes: ['rank', 'wallet'],
      
    })
    const user = userGame.get({plain:true})
    console.log(user)
    res.json(user)
    
  } catch (err) {
    res.status(500).json(err);
  } 
});


router.put('/:id', (req, res) => {
  User.update(
    {
      wallet: req.body.wallet
    },
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
      // document.cookie = user_id;
      req.session.logged_in = true;
      
      console.log(req.session)
      return res.json({ user: req.session.user_id, message: 'You are now logged in!' });
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

//post route for user hands won and hands lost


router.post('/:handsWon', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.user_handsWon = userData.user_handsWon;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/:handsLost', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.user_handsLost = userData.user_handsLost;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/profile', async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },

    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }})


export default router;