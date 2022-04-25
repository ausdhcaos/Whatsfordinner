function logout()
{
	let result = await fetch("https://api.betterdinner.space/api/logout",
	{
        method:'POST',
        headers:
		{
			"Accept":'application/json',
            "Content-Type":"application/json",
            "Authorization":"Bearer " + token,
		}, 
			body: JSON.parse(localStorage.getItem("token:"));
		});
		
	token = await result.json();
	localStorage.getItem("Token",JSON.stringify(token))
    history.push("/add")
}