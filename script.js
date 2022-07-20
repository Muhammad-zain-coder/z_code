function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 11,
        center: { lat: 29.169670, lng: -82.154660 },
    });
    // Set LatLng and title text for the markers. The first marker (Boynton Pass)
    // receives the initial focus when tab is pressed. Use arrow keys to
    // move between markers; press tab again to cycle through the map controls.
    const tourStops = [
        [{ lat: 29.169670, lng: -82.154660 }, "<div class='z_bold'><p>Ocala - 17th</p><p>1714 SW 17th St Ocala, FL 34471</p><p>Working Hours: <span><br>Mon - Fri: 8 AM - 5 PM<br> Sat - Sun: closed</span></p><p class='inline'>Phone: <a href='tel:352-329-6404'>352-329-6404</a></p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<p class='inline'>Fax: <a href='tel:844-388-6186'>844-388-6186</a></p><p> <a href='https://goo.gl/maps/us6cCkCKK7NsbHJC6'>Direction</a></p></div>"],
        [{ lat: 29.21533, lng: -82.19909 }, "<div class='z_bold'><p>Ocala - 49th</p><p>2765 NW 49th Ave, Ste 304, Ocala, FL 34482</p><p>Working Hours: <span><br>Mon - Fri: 8 AM - 5 PM<br> Sat - Sun: closed</span></p><p class='inline'>Phone: <a href='tel:352-604-5076'> 352 - 604 - 5076</a></p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<p class='inline'>Fax: <a href='tel:844-388-6186'> 844 - 388 - 6186</a></p><p> <a href='https://goo.gl/maps/d1uKjGMRBxsXcUfq6'>Direction</a></p></div>"],
        [{ lat: 29.1122297, lng: -82.2189885 }, "<div class='z_bold'><p>Ocala – 60th</p><p>7502 SW 60th Ave, Ste B, Ocala, FL 34476</p><p>Working Hours: <span><br>Mon - Fri: 8 AM - 5 PM<br> Sat - Sun: closed</span></p><p class='inline'>Phone: <a href='tel:352-580-6831'>352-580-6831</a></p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<p class='inline'>Fax: <a href='tel:844-388-6186'> 844-388-6186</a></p><p> <a href='https://goo.gl/maps/1AKHybmMQ9sWnWaX8'>Direction</a></p></div>"],
        [{ lat: 29.0844461, lng: -82.2545102 }, "<div class='z_bold'><p>Ocala – Canopy Oaks</p><p>8075 SW State Rd 200, Ste 118, Ocala, FL 34481</p><p>Working Hours: <span><br>Mon - Fri: 8 AM - 5 PM<br> Sat - Sun: closed</span></p><p class='inline'>Phone: <a href='tel:352-604-5090'>352-604-5090</a></p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<p class='inline'>Fax: <a href='tel:844-388-6186'>844-388-6186</a></p><p> <a href='https://goo.gl/maps/JicWTK85xtRUsrZJ9'>Direction</a></p></div>"],
        [{ lat: 29.1991731, lng: -82.1029144 }, "<div class='z_bold'><p>Ocala - Oakbrook</p><p> Ocala - Oakbrook NE 25th Ave Ste 301, Ocala, FL 34470  1111 NE 25th Ave Ste 301, Ocala, FL 34470</p><p>Working Hours: <span><br>Mon - Fri: 8 AM - 5 PM<br> Sat - Sun: closed</span></p><p class='inline'>Phone: <a href='tel:352-605-6681'> 352-605-6681</a></p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<p class='inline'>Fax: <a href='tel:352-236-8610 '> 352-236-8610 </a></p><p> <a href='https://goo.gl/maps/4akqjnW7k8L5UCpT8'>Direction</a></p></div>"],
        [{ lat: 29.1063646, lng: -82.2587541 }, "<div class='z_bold'><p>Ocala - On Top of the World</p><p>Ocala - On Top of the World SW 80th St, Ste 8, Ocala, FL 34481 8409 SW 80th St, Ste 8, Ocala, FL 34481</p><p>Working Hours: <span><br>Mon - Fri: 8 AM - 5 PM<br> Sat - Sun: closed</span></p>&nbsp;<p class='inline'>Phone: <a href='tel:352-580-6869'>352-580-6869</a></p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<p class='inline'>Fax: <a href='tel:844-388-6186'> 844-388-6186</a></p><p> <a href='https://goo.gl/maps/zSohaCt276wTQVkB8'>Direction</a></p></div>"],
        [{ lat: 29.1279774, lng: -82.2083607 }, "<div class='z_bold'><p>Ocala - SR 200</p><p> cala - SR 200 SW College Rd, Ocala, FL 344745345 SW College Rd, Ocala, FL 34474</p><p>Working Hours: <span><br>Mon - Fri: 8 AM - 5 PM<br> Sat - Sun: closed</span></p><p class='inline'>Phone: <a href='tel:352-580-6787'> 352-580-6787</a></p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<p class='inline'>Fax: <a href='tel:352-873-8424'>352-873-8424</a></p><p> <a href='https://goo.gl/maps/rFQAyp2aUWX8EyJb9'>Direction</a></p></div>"],
        [{ lat: 29.20280, lng: -82.08048 }, "<div class='z_bold'><p>Ocala – SR 40</p><p>4011 E Silver Springs Blvd, Ocala, FL 34470</p><p>Working Hours: <span><br>Mon - Fri: 8 AM - 5 PM<br> Sat - Sun: closed</span></p><p class='inline'>Phone: <a href='tel:352-580-6878'> 352-580-6878</a></p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<p class='inline'>Fax: <a href='tel:844-388-6186'>844-388-6186</a></p><p> <a href='https://goo.gl/maps/XracGxb5go8i14AU9'>Direction</a></p></div>"],
        [{ lat: 29.1402894, lng: -82.1998684 }, "<div class='z_bold'><p>Ocala – West Marion</p><p>4600 SW 46th Court, Ste 310, Ocala, FL 34474</p><p>Working Hours: <span><br>Mon - Fri: 8 AM - 5 PM<br> Sat - Sun: closed</span></p><p class='inline'>Phone: <a href='tel:352-292-8562'> 352-292-8562</a></p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<p class='inline'>Fax: <a href='tel:352-620-8639'> 352-620-8639</a></p><p> <a href='https://goo.gl/maps/tLW9Bd1kCErVhYjJ9'>Direction</a></p></div>"],
    ];
    // Create an info window to share between markers.
    const infoWindow = new google.maps.InfoWindow();

    // Create the markers.
    tourStops.forEach(([position, title], i) => {
        const marker = new google.maps.Marker({
            position,
            map,
            title: `${title}`,
            icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
            optimized: false,
        });

        // Add a click listener for each marker, and set up the info window.
        marker.addListener("click", () => {
            infoWindow.close();
            infoWindow.setContent(marker.getTitle());
            infoWindow.open(marker.getMap(), marker);
        });
    });
}

window.initMap = initMap;