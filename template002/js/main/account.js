

console.log('sdfsdf')
$(document).ready(function () {
  console.log('account- localStorage.valueOf()', localStorage.valueOf());
  if (localStorage.getItem('username')) {
    $('.login >span').text('')
    // $('.login').attr('href', 'javascript:;')
    // $('.login').click(()=>{})
  }
});