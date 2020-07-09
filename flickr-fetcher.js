var FlickrFetcher;

FlickrFetcher = {
    photoObjToURL: function(photoObj) {
        return `https://farm${photoObj.farm}.staticflickr.com/${photoObj.server}` +
               `/${photoObj.id}_${photoObj.secret}_b.jpg`;
    },
    transformPhotoObj: function(photoObj) {
       return {
			title: photoObj.title,
			url:   FlickrFetcher.photoObjToURL(photoObj)
        };
    },
    fetchFlickrData: function(apiKey, fetcher) {
        if ((!fetcher) && (typeof jQuery !== 'undefined')) {
            fetcher = jQuery.getJSON.bind(jQuery);
        }
        var url = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key='
                  + apiKey + '&text=pugs&format=json&nojsoncallback=1';
        return fetcher(url);
    },
    fetchPhotos: function (apiKey, fetcher) {
        return FlickrFetcher.fetchFlickrData(apiKey, fetcher).then(function(data) {
            return data.photos.photo.map(FlickrFetcher.transformPhotoObj);
        });
    }
};


if ((typeof module !== 'undefined') && (typeof module.exports !== 'undefined')) {
    module.exports = FlickrFetcher;
}
