const socials = ['Twitter', 'Facebook', 'Google'];
//console.log(socials.__proto__);
///socials.forEach(function(item){
 //   console.log(item);

//});

//let sum = 0;
//const numbers = [65, 44, 12, 4];
//numbers.for

//socials.forEach((item,index,arr) =>
 //   console.log(`${index}-${item}`, arr));
    

function logSocials(social) {
    console.log(social);
}
    
//socials.forEach(logSocials);

const socialObjs = [
    { name: 'Twitter', url: 'https://twitter.com' },
    { name: 'Facebook', url: 'https://facebook.com' },
    { name: 'Linkedin', url: 'https://www.linkedin.com' },
    { name: 'Instagram', url: 'https://www.instagram.com' },
];
socialObjs.forEach((item) => console.log(item.url));
