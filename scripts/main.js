

let myImage = document.querySelector('img');
myImage.onclick = function(){
	let mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/2019-dodge-challenger_incentive-3.jpg.image.1440.jpg')
	{
		myImage.setAttribute('src','images/b6d79117db5945c0259510dedfa88742.jpg');
    }
    else if(mySrc === 'images/b6d79117db5945c0259510dedfa88742.jpg' )
    {
    	myImage.setAttribute('src','images/2019-dodge-challenger_incentive-3.jpg.image.1440.jpg')
    }
}

let setUserName = function(name){
	let text =  document.querySelector('h1');
    text.textContent = name + 'you are cool';
}
document.querySelector('button').onclick = function(){
	let name = prompt("what is your name");
	setUserName(name);
}