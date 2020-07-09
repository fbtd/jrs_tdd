var PhotoLister;

PhotoLister = {
    photoToListItem: function(photoObj) {
        return `<li><figure><img src="${photoObj.url}" alt=""/>`
             + `<figcaption>${photoObj.title}</figcaption></figure></li>`;
    },
    photoListToHTML: function(photos) {
        return  '<ul>' + photos.map(PhotoLister.photoToListItem).join('') + '</ul>'
    },
    addPhotosToElement: function ($, selector, list) {
        return $(selector).append(list);
    }
};

if ((typeof module !== 'undefined') && (typeof module.exports !== 'undefined')) {
    module.exports = PhotoLister;
}
