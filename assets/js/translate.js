
// start languages
var arrLang = new Array();
    arrLang['en'] = new Array();
    arrLang['ar'] = new Array();

    // English content
    arrLang['en']['home'] = 'Home';
    arrLang['en']['about'] = 'About ';
    arrLang['en']['skills'] = 'skills ';
    arrLang['en']['projects'] = 'Projects ';
    arrLang['en']['contact'] = 'Contact ';
    arrLang['en']['Languages'] = 'Languages ';
    arrLang['en']['WELCOME TO MY PORTFOLIO'] = 'WELCOME TO MY PORTFOLIO ';
    arrLang['en']['I,am '] = 'I,am';
    arrLang['en']['Bassam '] = 'Bassam ';
    arrLang['en']['Frontend Developer '] = ' Frontend Developer ';

    // arabic content ( Language) 
    // Please change to your own language
    arrLang['ar']['home'] = ' الرئيسية';
    arrLang['ar']['about'] = 'عني';
    arrLang['ar']['skills'] = 'المهارات';
    arrLang['ar']['projects'] = 'المشاريع';
    arrLang['ar']['contact'] = 'التواصل';
    arrLang['ar']['Languages'] = 'اللغة';
    arrLang['ar']['WELCOME TO MY PORTFOLIO'] = '!مرحبا بكم في موقعي ';
    arrLang['ar']['I,am '] = 'انا  ';
    arrLang['ar']['Bassam '] = ' بسام  ';
    arrLang['ar']['Frontend Developer '] = ' مصمم واجهات المواقع ';


//function
$(function() {

  $('.translate').click(function() {
    var lang = $(this).attr('id');

    $('.lang').each(function(index, item) {
      $(this).text(arrLang[lang][$(this).attr('key')]);
    });
  });
});
//end languages

