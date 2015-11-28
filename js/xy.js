$(document).on('touchmove', function(e) {
	e.preventDefault();
});
$(function(){

	var loadingIcon = $(".xy-loading"),
		loadingView = $(".loading"),
		isChangeing = false,
		swipeIndex = 0,
		viewLength = $("#main .view").length,
		gifBox = $(".gift-box");

	var changeEffect = {
		0 : function (callback) {
			var view = $(".view-1");
            var photo1 = view.find(".photo-1");
            var photo2 = view.find(".photo-2");
            var photo3 = view.find(".photo-3");

            var text1 = view.find(".text-1");
            var text2 = view.find(".text-2");
            var text3 = view.find(".text-3");

            setTimeout(function(){
            	new Type(text1[0],function(){
            		$("#sound").fadeIn();
            		new Type(text2[0],function(){
            			new Type(text3[0],function(){
            				photo1.addClass("active");
            				setTimeout(function(){
            					photo2.addClass("active");
            				}, 600);
            				setTimeout(function(){
            					photo3.addClass("active");
            					console.log(isChangeing, callback);
            					callback && callback();
            				},1200);
            			});
            		})
            	});
            	
            },800);
		},
        1 : function (callback) {
        	var view1 = $(".view-1");
        	view1.fadeOut(800, function(){
        		var view = $(".view-2");
        		var photoBox1 = view.find(".photo-box-1");
        		var photoBox2 = view.find(".photo-box-2");
        		var photoBox3 = view.find(".photo-box-3");
        		var photos = view.find(".photo");
        		photos.on("transitionEnd webkitTransitionEnd", function(event){
        			event.stopPropagation();
        		})

        		photoBox1.addClass("active");

        		function showPhoto(){
        			var $this = $(this);
        			var photo = $this.find('.photo');
        			var text = $this.find('.text');
        			photo.addClass('active');
        			new Type(text[0],function(){
        				photo.addClass('active');
        			});
        		}

        		photoBox1.on('transitionEnd webkitTransitionEnd', showPhoto)

        		setTimeout(function(){
        			photoBox2.addClass("active");
        			photoBox2.on('transitionEnd webkitTransitionEnd', showPhoto);
        		}, 1200);

        		setTimeout(function(){
        			photoBox3.addClass("active");
        			photoBox3.on('transitionEnd webkitTransitionEnd', function(){
	        			showPhoto.call(this);
	        			callback && callback();
	        		});
        		}, 2400);
        	});
        },
        2 : function (callback) {
            $(".view-2").fadeOut(400,function(){
            	var view = $(".view-3");
            	var photo1 = view.find(".photo-1");
            	var photo2 = view.find(".photo-2");
            	var text1 = view.find(".text-1");
            	var text2 = view.find(".text-2");
            	var text3 = view.find(".text-3");

            	new Type(text1[0],function(){
            		new Type(text2[0],function(){
            			new Type(text3[0],function(){
            				photo1.addClass("active");
            				setTimeout(function(){
            					photo2.addClass("active");
            					callback && callback();
            				}, 600);
            			});
            		})
            	});
            });
        },
        3 : function (callback) {
            $(".view-3").fadeOut(400,function(){
            	var view = $(".view-4");
            	var text1 = view.find(".text-1");
            	var text2 = view.find(".text-2");
            	var text3 = view.find(".text-3");
            	var text4 = view.find(".text-4");
            	var text5 = view.find(".text-5");
            	var text6 = view.find(".text-6");
            	var text7 = view.find(".text-7");
            	var photo1 = view.find(".photo-1");
            	var photo2 = view.find(".photo-2");

            	new Type(text1[0], function(){
            		photo1.addClass('active');
            		new Type(text2[0], function(){
            			photo2.addClass('active');
            			new Type(text3[0],function(){
            				setTimeout(function(){
            					new Type(text4[0], function(){
            						new Type(text5[0], function(){
            							new Type(text6[0],function(){
            								new Type(text7[0],function(){
            									callback && callback();
            								});
            							});
            						});
            					})
            				},600);
            			})
            		});
            	});

            });
        },
        4 : function (callback) {
            $(".view-4").fadeOut(400,function(){
            	var view = $(".view-5");
            	var text1 = view.find(".text-1");
            	var text2 = view.find(".text-2");
            	var photos = view.find(".photo")
            	
            	new Type(text1[0],function(){
            		new Type(text2[0],function(){
            			setTimeout(function(){
            				photos.each(function(idx){
	            				var $this = $(this);
	            				setTimeout(function(){
	            					$this.addClass('active');
	            					if (idx === photos.length-1) {
	            						callback && callback();
	            					};
	            				},400*idx);
	            			});
            			}, 400);
            		});
            	});
            });
        },
        5 : function (callback) {
            $(".view-5").fadeOut(400,function(){
            	var view = $(".view-6");
            	var text1 = view.find(".text-1");
            	var text2 = view.find(".text-2");
            	var photos = view.find(".photo");
            	new Type(text1[0], function(){
            		photos.each(function(idx){
            			var $this = $(this);
            			setTimeout(function(){
            				$this.addClass('active');
            				if (idx === photos.length-1) {
            					new Type(text2[0],function(){
            						callback && callback();
            					});
            				};
            			}, 600*idx);
            		});
            	});
            });
        },
        6 : function (callback) {
            $(".view-6").fadeOut(400, function(){
            	var view = $(".view-7");
            	var text1 = view.find(".text-1");
            	var text2 = view.find(".text-2");
            	var text3 = view.find(".text-3");
            	var text4 = view.find(".text-4");
            	var text5 = view.find(".text-5");
            	var photo = view.find(".photo");
            	setTimeout(function(){
            		new Type(text1[0], function(){
            			setTimeout(function(){
            				photo.addClass('active');
            				new Type(text2[0], function(){
            					new Type(text3[0], function(){
            						new Type(text4[0], function(){
            							new Type(text5[0], function(){
            								callback && callback();
            							});
            						});
            					});
            				});
            			},600);
            		});
            	},600);
            });
        },
        7 : function (callback) {
        	$(".view-7").fadeOut(400,function(){
        		var view = $(".view-8");
        		var textbox = view.find(".text-box");

        		var ua = navigator.userAgent.toLowerCase();
				var isMoblie = null;
				if(ua.match(/iphone/i) == "iphone"){
					isMoblie = "iphone";
				}
				if (ua.match(/android/i) == "android") {
					isMoblie = "android";
				}

				if (isMoblie === "iphone") {
					showCake();
	        		setTimeout(function(){
	        			textbox.fadeIn(600, function(){
	        				$(".cake-text").fadeIn();
	        			});
	        		},6000);
				}
				else {
					$("#cake-a").fadeIn(600);
					$("#cake-a-text").css({opacity: 100}).fadeIn(600);
					textbox.fadeIn(600);
				}
        	});
        }
    }

    function changeFinish(){
    	setTimeout(function(){
    		isChangeing = false;
    		$("#arrow").fadeIn(600);
    	},1000);
    }

    $("#main").swipe( {
        swipeUp:function(event, direction, distance, duration, fingerCount) {
        	// console.log('swipe:', isChangeing, swipeIndex, viewLength);
            if(isChangeing){
                return;
            }
            isChangeing = true;
            swipeIndex++;
            if(swipeIndex >= viewLength){
                return;
            }
            $("#arrow").fadeOut();
            changeEffect[swipeIndex](changeFinish);
        }
    });

	function loading(){
		var sourceList = "loading.jpg gift.png view1-1.jpg view1-2.jpg view1-3.jpg view2-1.jpg view2-2.jpg view2-3.jpg view3-1.jpg view3-2.jpg view4-1.jpg view4-2.jpg view5-1.jpg view5-2.jpg view5-3.jpg view5-4.jpg view6-1.jpg view6-2.jpg view6-3.jpg view7-1.jpg view_bg.jpg cake.jpg wxlink.jpg".split(" ");
		var loaded = 0;
		for (var i=0; i<sourceList.length; i++){
			var src = "./images/" + sourceList[i];
			var img = new Image();
			img.src = src;
			img.onload = function(){
				loaded++;
				$(".loading-text span").html( parseInt(loaded / sourceList.length * 100) + "%");
				if (loaded === sourceList.length) {
					setTimeout(function(){
						init();
					},2000);
				};
			}
			img.error = function(){
				$(".loading-text span").html( "100%");
				setTimeout(function(){
					init();
				},2000);
			}
		}
	}

	function init(){
		loadingIcon.fadeOut(800,function(){
			gifBox.fadeIn(800,function(){
				gifBox.on('touchstart', function(e){
					loadingView.fadeOut(800, changeEffect[0](changeFinish));
					bgm();
					gifBox.unbind('touchstart');
				});
			});
		});
	}

	function showCake(){
		var cakeTpl = $("#cake-tpl").text();
		$(".back-cover").append($(cakeTpl));
		$(".cake-text").animate({opacity:1});
	}

	function Type(elm, opt){
		this.e = elm;
		if( typeof opt === "function" ){
			this.text = elm.dataset.text;
			this.callback = opt;
		}
		else {
			this.text = elm.dataset.text ? elm.dataset.text : opt.text;
			if (arguments.length >1 ){
				this.callback = opt.callback ? opt.callback : false;
			}
			else {
				this.callback = false;
			}
		}
		this.timer = null;
		this.len = this.text.length;
		this.idx = 0;
		this.time = 150;
		this.tick();
	}
	Type.prototype.tick = function() {
		var _this = this;
		if (this.len <= 0) {
			return;
		}
		this.idx++;
		if (this.idx > this.len) {
			clearTimeout(this.timer);
			this.timer = null;
			this.callback && this.callback();
			return;
		};
		var str = this.text.substring(0,this.idx);
		this.e.innerHTML = str;
		this.timer = setTimeout(function(){
			_this.tick();
		}, _this.time);
	};

	function bgm() {
		var audio = document.getElementById("bgm");
		audio.play();
	}

	$("#sound").on('touchstart', function(){
		var audio = document.getElementById("bgm");
		if (audio.paused) {
			audio.play();
			$(this).removeClass('pause');
		}
		else{
			audio.pause();
			$(this).addClass('pause');
		}
	});


	loading();
});