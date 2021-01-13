

console.log('sdfsdf')
$(document).ready(function () {
  console.log(sessionStorage.valueOf());
  if(sessionStorage.getItem('username')){
    $('.login >span').text('')
    $('.login').attr('href', 'javascript:;')
    $('.login').click(()=>{})
  }
});