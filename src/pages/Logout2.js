import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom';
import axios from 'axios';
function logout()
{
	let result = await axios.post
	(
		"https://api.betterdinner.space/api/logout",
		{
			JSON.parse(localStorage.getItem("token:")),
		},
		{
			headers:
			{
				"Accept":'application/json',
				"Content-Type":"application/json",
				"Authorization":"Bearer " + token,
			}, 
		}
	);
}