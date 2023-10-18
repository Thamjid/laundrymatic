const parentContainer = document.querySelector('.about.content');

parentcontainer.addEventListener('click',event=>{

    const current = event.target;

    const isbtn=current.className.includes('read-more-btn');

    if(!read-more-btn) return;

    const currentText = event.target.parentNord.querySelector('.about.content.read-more-text');

    currentText.clasList.toggle('about.content.read-more-text--show');

    current.textcontent = current.textcontent.includes('Read more') ?
    "Read less..." :"Read more...";

})