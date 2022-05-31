import React from 'react';
import { Sauce } from './Sauce';

export function SaucesList ({sauces}) {
	return <>
		{
			sauces.map((sauce, idx) => {
				return <Sauce sauce={sauce} key={idx} />
			})
		}
	</>
} 
