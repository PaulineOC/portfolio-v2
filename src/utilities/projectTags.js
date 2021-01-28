const tagColorEnums = {
	'web': 'success' ,
	'game': 'dark',
	'React': 'red',
	'misc': 'secondary',
	'Unity': 'primary'
};

// primary = blue
// secondary = gray
// green = green
// red = danger
// yellow = warning
// info = dark
// light = light gray
// dark = black 

const determinePillColor = (tagKey) => {
	if(tagColorEnums[tagKey]){
		return tagColorEnums[tagKey];
	}
};

export {
	determinePillColor
}