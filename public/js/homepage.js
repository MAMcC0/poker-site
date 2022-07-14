const onLoadRender = async () => {
   
     
        
        const response = await fetch(`/user/users/`, {
            method: 'GET',
        });
        if (response.ok) {
            console.log(response)
        } else {
            console.log(err)
        }
    
}

onLoadRender()