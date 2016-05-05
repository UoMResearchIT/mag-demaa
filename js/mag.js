/**
 *	Data visualisations for MAG eye tracking project
 *	August 2015
 *	@author rob.dunne@manchester.ac.uk
 */

var app = angular.module('app', []);

app.controller('dataImage', function($scope, $http, $sce) {
	// Set vars
	
	// Data for the different views
	$scope.data = {
		'images': {
			1: { 
				'image': 'art/1934.2med.png', 
				'heatmap': 'viz/1934.2med_heatmap.jpg', 
				'title': 'Self-portrait, Louise Jopling R.B.A., 1877', 
				'text': 'A frontal bust portrait of the artist as a young woman with her hair tied up, wearing a pale coat with white collar and matching hat, set at an angle. At her neck she wears a decorative pink neck scarf. Her skin and features are smoothly and evenly painted, in comparison to her more textured clothes. She is set against a dark plain background.', 
				'copyright': 'n/a' 
			},
			2: { 
				'image': 'art/1995.184med.png',
				'heatmap': 'viz/1995.184med_heatmap.jpg',
				'title': 'Release, Mark Francis, 1994',
				'text': 'Semi-abstract monochrome painting based on images of chromosomes seen through an electron microscope, comprising of short black curved and squiggled lines covering the canvas in random patterns on a white ground, giving the impression of chaotic, uncontrolled movement and reproduction. The black forms are painted onto a wet white ground, which is then brushed with a broad dry brush giving a three dimensional shadowy effect. The forms are irregular in placement and shape, they include: horse-shoe shapes, bent rods and looped forms, each line has a ball on each end.', 
				'copyright': 'By permission of the artist Mark Francis'
			},
			3: { 
				'image': 'art/1976.79med_resized.png', 
				'heatmap': 'viz/1976.79med_heatmap.jpg', 
				'title': 'Sir Gregory Page-Turner, Pompeo Batoni, 1768', 
				'text': 'A portrait of an young English gentleman on the grand tour. The subject is dressed in a bright crimson coat, waistcoat and breeches with gold braiding, lace cuffs and cravat. A sword hangs at his side with only the hilt visible. He stands facing the viewer with his head turned to his right. His left arm rests on a worn map of Rome, on a green marble table top, next to an inkwell. His right arm gestures out of the picture. Behind him, on the left, a bust of Minerva, rests on the table, with a pile of books at its base. Through a window framed by drapery on the left and a fluted column on the right, the Colosseum is visible in the background.', 
				'copyright': 'Manchester City Galleries' 
			},
			4: { 
				'image': 'art/1970.34med_resized.png', 
				'heatmap': 'viz/1970.34med_heatmap.jpg', 
				'title': 'Cheetah and Stag with Two Indians, George Stubbs, 1765',
				'text': 'A painting inspired by an incident that took place in 1764, when a cheetah brought to England from India was pitched against a stag in a hunting demonstration atWindsor. The cheetah, seen in profile to the right, wears a collar, a red hood and a red belt harness tied around its abdomen; kneeling to the far side of the cheetah is one of the male figures, wearing a white robe with a single button at the neck and a turban of spotted white fabric, restraining the animal by its belt; he turns his head to the right, looking towards where the second male figure is gesturing. This figure, also with a white robe, worn over a pair of red trousers, and red shoes with extravagantly curled-up toes, has a plain white turban. He looks in the direction of the cheetah and gestures with both hands towards a stag standing behind him on the right. The stag turns its head towards the cheetah; both animals stare at one another. There is an anatomical disparity between the stags body, which is based on that of a British red deer, and its antlers, painted from those of an Indian sambar. The scene is depicted on a plateau within an imaginary landscape; to the left are dramatic cliffs atop a grassy slope, to the right, below the stag, is a river, which draws the eye into a landscape of woodland and undulating hills; the sky shows glimpses of blue through a bank of stormy clouds.', 
				'copyright': 'Manchester City Galleries'
			},
			5: { 
				'image': 'art/1934.394med_resized.png',
				'heatmap': 'viz/1934.394med_heatmap.jpg',
				'title': 'When the West with Evening Glows, Joseph Farquharson R.A., 1901', 
				'text': 'A snowy winter landscape, looking along a pathway through fields, with groups of trees on either side of the path in the middle-ground. Fresh footprints can be seen in the deep snow, leading away from the viewer, with three crows in the foreground by the prints. The whole scene is lit by the warm glow of the rising sun from behind the hills in the background.', 
				'copyright': 'Manchester City Galleries' 
			},
			6: { 
				'image': 'art/1917.170med_resized.png', 
				'heatmap': 'viz/1917.170med_heatmap.jpg', 
				'title': 'Rhyl Sands, David Cox, 1854', 
				'text': 'A view along the length of the beach at Rhyl, which slopes down to the sea on the left and up to the town on the right of the composition. Dotted along the beach are figures, including ladies with parasols and others enjoying donkey rides.', 
				'copyright': 'Manchester City Galleries' 
			},
			7: { 
				'image': 'art/1964.287med.png', 
				'heatmap': 'viz/1964.287med_heatmap.jpg', 
				'title': '14.6.64, John Hoyland, 1964', 
				'text': 'An abstract painting with four small pale semi-circular shapes in a rough chevron form against a dark green background. The top semi-circle is orange and others are yellow, red & green.', 
				'copyright': 'Courtesy of the Artist\'s estate / Bridgeman Art Library' 
			},
			8: { 
				'image': 'art/1947.445low.png', 
				'heatmap': 'viz/1947.445low_heatmap.jpg', 
				'title': 'Cheviot Farm, Frances Mary Hodgkins, 1939', 
				'text': 'A farmyard scene, painted in a child-like style in subtle colours. A white and brown cow stands at the front right, next to a mowing or rollingtype machine with long brown handles. A gate or hurdle is seen behind the machine, and another white and black farm animal in the distance behind the cow. All are in a circular field or yard. To either side are farmyard buildings, the barn with a conical roof on the left being particularly visible. Behind the farm are rolling hills and trees, painted in blue, pink and brown, as opposed to the yellow tonality of the foreground.', 
				'copyright': 'n/a' 
			},
			9: { 
				'image': 'art/1968.173med.png', 
				'heatmap': 'viz/1968.173med_heatmap.jpg', 
				'title': 'Woman and Suspended Man, Thomas Sam Haile, 1939', 
				'text': 'Surreal figure composition of a large, pale grey female head on the left, with frontal eyes and side profile; small half male torso to the right with legs and hips depicted, with two large eyes suspended from a thin, jagged horizontal line above. This line, and the one mirroring it above, could be understood as a horizon line or a silhouetted line of a mountainous region. This lower torso is positioned within a grey rectangle from which emerges a large abstracted pointing arm with a bulbous wrist in white, reaching towards and piercing a rectangle of dark grey. There is a small, free-floating single leg in the background between the two main figurative motifs. The background is depicted in flat grey.', 
				'copyright': 'Gift of Mrs Marianne Haile' 
			}
		},
		'videos': {
			1: { 
				'image': '1934.2med.png', 
				'mp4': '1934.2med_reveal.mp4', 
				'title': 'Self-portrait gaze reveal', 
				'text': '1Sed vel nisi sit amet sem eleifend consectetur. Morbi sit amet nibh quis risus tempor suscipit a quis arcu. Suspendisse id finibus justo. Vivamus mauris est, bibendum ac ipsum eu, malesuada convallis felis.', 
				'copyright': 'IAM Lab, University of Manchester' 
			},
			2: { 
				'image': '1976.79med_resized.png', 
				'mp4': '1976.79med_reveal.mp4', 
				'title': 'Sir Gregory Page-Turner gaze reveal', 
				'text': '2Sed vel nisi sit amet sem eleifend consectetur. Morbi sit amet nibh quis risus tempor suscipit a quis arcu. Suspendisse id finibus justo. Vivamus mauris est, bibendum ac ipsum eu, malesuada convallis felis.', 
				'copyright': 'IAM Lab, University of Manchester' 
			},
			3: { 
				'image': '1934.394med_resized.png', 
				'mp4': '1934.394med_reveal.mp4', 
				'title': 'When the West with Evening Glows gaze reveal', 
				'text': '2Sed vel nisi sit amet sem eleifend consectetur. Morbi sit amet nibh quis risus tempor suscipit a quis arcu. Suspendisse id finibus justo. Vivamus mauris est, bibendum ac ipsum eu, malesuada convallis felis.', 
				'copyright': 'IAM Lab, University of Manchester' 
			},
			4: { 
				'image': '1970.34med.jpg', 
				'mp4': '1970.34med_single.mp4', 
				'title': 'Cheetah and Stag with Two Indians single gaze', 'text': '1Sed vel nisi sit amet sem eleifend consectetur. Morbi sit amet nibh quis risus tempor suscipit a quis arcu. Suspendisse id finibus justo. Vivamus mauris est, bibendum ac ipsum eu, malesuada convallis felis.', 
				'copyright': 'IAM Lab, University of Manchester' 
			},
			5: { 
				'image': '1970.34med.jpg', 
				'mp4': '1970.34med_multiple.mp4', 
				'title': 'Cheetah and Stag with Two Indians multiple gaze', 
				'text': '1Sed vel nisi sit amet sem eleifend consectetur. Morbi sit amet nibh quis risus tempor suscipit a quis arcu. Suspendisse id finibus justo. Vivamus mauris est, bibendum ac ipsum eu, malesuada convallis felis.', 
				'copyright': 'IAM Lab, University of Manchester' 
			},
			6: { 
				'image': '1970.34med.jpg', 
				'mp4': '1970.34med_heatmap.mp4', 
				'title': 'Cheetah and Stag with Two Indians heatmap', 
				'text': '1Sed vel nisi sit amet sem eleifend consectetur. Morbi sit amet nibh quis risus tempor suscipit a quis arcu. Suspendisse id finibus justo. Vivamus mauris est, bibendum ac ipsum eu, malesuada convallis felis.', 
				'copyright': 'IAM Lab, University of Manchester' 
			},
			7: { 
				'image': '1976.79med.jpg', 
				'mp4': '1976.79med_single.mp4', 
				'title': 'Sir Gregory Page-Turner single gaze', 'text': '1Sed vel nisi sit amet sem eleifend consectetur. Morbi sit amet nibh quis risus tempor suscipit a quis arcu. Suspendisse id finibus justo. Vivamus mauris est, bibendum ac ipsum eu, malesuada convallis felis.', 
				'copyright': 'IAM Lab, University of Manchester' 
			},
			8: { 
				'image': '1976.79med.jpg', 
				'mp4': '1976.79med_multiple.mp4', 
				'title': 'Sir Gregory Page-Turner multiple gaze', 
				'text': '1Sed vel nisi sit amet sem eleifend consectetur. Morbi sit amet nibh quis risus tempor suscipit a quis arcu. Suspendisse id finibus justo. Vivamus mauris est, bibendum ac ipsum eu, malesuada convallis felis.', 
				'copyright': 'IAM Lab, University of Manchester' 
			},
			9: { 
				'image': '1976.79med.jpg', 
				'mp4': '1976.79med_heatmap.mp4', 
				'title': 'Sir Gregory Page-Turner heatmap', 
				'text': '1Sed vel nisi sit amet sem eleifend consectetur. Morbi sit amet nibh quis risus tempor suscipit a quis arcu. Suspendisse id finibus justo. Vivamus mauris est, bibendum ac ipsum eu, malesuada convallis felis.', 
				'copyright': 'IAM Lab, University of Manchester' 
			}
		},
		'loading': true
	};

	// The current image
	$scope.image = {
		'src': '',
		'title': '',
		'text': '',
		'copyright': ''
	};
	
	// The current video
	$scope.video = {
		'title': '',
		'text': '',
		'copyright': '',
		'mp4': 'video/test.mp4',
		'image': ''
	};
	
	// Navigation object for the different views
	$scope.view = {
		'home': {
			'show': true
		},
		'images': {
			'show': false,
			'views': {
				'heatmap': false,
				'gazeplot': false
			},
			'currentFile': 1
		},
		'video': {
			'show': false,
			'currentFile': 1
		},
		'header': {
			'show': true
		}, 
		'menu': false
	};

	// Load the home page
	$scope.loadHome = function() {
		// Show the correct panel
		$scope.changeView(true, false, false, false);
		
		// Hide the header too
		$scope.view.header.show = false;
		
		// Animate the titles
		$('#mag-home h1').transition({ opacity: 1, delay: 500, y: '40px' });
		$('#mag-home h4').transition({ opacity: 1, delay: 1000, y: '-80px' });
		$('#start-arrow').transition({ opacity: 1, delay: 2000, y: '-50px' });
	};

	// Load the static image view
	$scope.loadImages = function(file) {
		// Keep it within range
		var filesLength = Object.size($scope.data.images);
		file = (!file || file < 1) ? 1: file;
		file = (file > filesLength) ? filesLength: file;

		// Show the correct panel
		$scope.changeView(false, true, false, false);

		// Update the navigation
		$scope.view.images.currentFile = file;

		// Add the image
		$scope.image.src = $scope.data.images[file].image;
		
		// Add the text
		$scope.image.title = $scope.data.images[file].title;
		$scope.image.text = $scope.data.images[file].text;
		$scope.image.copyright = $scope.data.images[file].copyright;
	};
	
	// Load the videos view
	$scope.loadVideo = function(file) {
		// Keep it within range
		var filesLength = Object.size($scope.data.images);
		file = (!file || file < 1) ? 1: file;
		file = (file > filesLength) ? filesLength: file;

		// Show the correct panel
		$scope.changeView(false, false, true, false);

		// Update the navigation
		$scope.view.video.currentFile = file;

		// Add the video src
		$scope.video.mp4 = $sce.trustAsResourceUrl("video/"+$scope.data.videos[file].mp4);
		
		// Add the poster image
		$scope.video.image = $scope.data.videos[file].image;
		
		// Add the text
		$scope.video.title = $scope.data.videos[file].title;
		$scope.video.text = $scope.data.videos[file].text;
		$scope.video.copyright = $scope.data.videos[file].copyright;
	};
	
	$scope.scrollToVideo = function() {
		$('html,body').animate({
          scrollTop: $('html').offset().top
        }, 1000);
	};
	
	// Change the navigation view
	$scope.changeView = function(home, view, video, anim) {
		$scope.view.home.show = home;
		$scope.view.images.show = view;
		$scope.view.video.show = video;
		
		// Show the header too
		$scope.view.header.show = true;
		
		// Hide the mobile menu
		$scope.view.menu = false;
	};
	
	// Swap between the static image views
	$scope.changeImagesView = function(view) {
		switch(view) {
			case 'plain':
				$scope.image.src = $scope.data.images[$scope.view.images.currentFile].image;
				break;
			case 'heatmap':
				$scope.image.src = $scope.data.images[$scope.view.images.currentFile].heatmap;
				break;
		}
	};
	
	// On page load start home page view
	$scope.loadHome();
});

// http://stackoverflow.com/questions/5223/length-of-a-javascript-object-that-is-associative-array
Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

