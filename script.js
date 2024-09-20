function filterGallery(category) {
            var items = document.getElementsByClassName('gallery-item');
            var buttons = document.getElementsByClassName('filter-buttons')[0].getElementsByTagName('button');

            
            if (category === 'all') {
                for (var i = 0; i < items.length; i++) {
                    items[i].style.display = 'block';
                }
            } else {
                for (var i = 0; i < items.length; i++) {
                    if (items[i].classList.contains(category)) {
                        items[i].style.display = 'block';
                    } else {
                        items[i].style.display = 'none';
                    }
                }
            }

            for (var i = 0; i < buttons.length; i++) {
                buttons[i].classList.remove('active');
            }
            event.target.classList.add('active');
        }