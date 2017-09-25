 angular.module('animais').directive("fileInput", function( $parse ){
            return{
                link: function($scope, element, attrs){
                    element.on('change', function(event){
                        var files = event.target.files;             

                        var reader = new FileReader();

                        var img = document.querySelector(".preview > img");
                        reader.addEventListener("load", function(){
                            img.src = reader.result;
                        }, false);

                        if(files){
                            reader.readAsDataURL(files[0]);                 
                        }
                    });
                }
            }   
    });