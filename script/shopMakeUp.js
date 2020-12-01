class Product {
    constructor(name,bodyPart,productType) {
        this.name = name;
        this.bodyPart = bodyPart;
        this.productType = productType;
      }

}
var productList = new Array();

function addProductCard(name, bodyPart, productType){

    var price = 'Rp' + (Math.floor(Math.random() * 99)+1) + '9.900';
    var imgSource = './assets/makeup/' + name + '.jpg';
    var  $productList = $('.product-list');
    var $productCard = $('').add('<div class="product-card"></div>');
    var $productImage = $('').add('<div class="product-image"> <img src="' + imgSource + '" alt=""></div>');
    var $productDetail = $('').add('<div class="product-details"><h4><a href="">' + name + '</a></h4><span id="body-part" class="product-tag">' + bodyPart + '</span>\n<span id="product-type" class="product-tag">'+ productType+ '</span><div class="product-bottom-details"><div class="product-price">' + price + '</div><div class="product-atc"><button> ADD TO CART</button></div></div></div>');
    $productCard.append($productImage);
    $productCard.append($productDetail);
    $productList.append($productCard);
}

function initialize(){
    // face
    productList.push(new Product("bobbi brown set","Face","Sets"));
    productList.push(new Product("cc+ cream","Face","balm"));
    productList.push(new Product("Creamy Concealer","Face","moisturizer"));
    productList.push(new Product("double wear foundation","Face","serum"));
    productList.push(new Product("holographic palette","Face","Sets"));
    productList.push(new Product("setting powder","Face","powder"));
    productList.push(new Product("setting spray","Face","serum"));
    productList.push(new Product("sunscreen spf40","Face","balm"));
    productList.push(new Product("translucent powder","Face","powder"));
    productList.push(new Product("trio stix","Face","moisturizer"));
    // eyes
    productList.push(new Product("anastasia brow pomade","Eyes","balm"));
    productList.push(new Product("better than ex","Eyes","moisturizer"));
    productList.push(new Product("charlotte tilbury lux eyeshadow pallete","Eyes","sets"));
    productList.push(new Product("fenty beauty concealer","Eyes","sets"));
    productList.push(new Product("KVD Vegan Beauty","Eyes","balm"));
    productList.push(new Product("marc jacobs pencil","Eyes","serum"));
    productList.push(new Product("MD lash enhancing serum","Eyes","serum"));
    productList.push(new Product("nars concealer","Eyes","powder"));
    productList.push(new Product("precisely brow pencil","Eyes","balm"));
    productList.push(new Product("tarte concealer","Eyes","serum"));
    // cheek
    productList.push(new Product("cheek powder","Cheek","powder"));
    productList.push(new Product("Dior Face Palette","Cheek","sets"));
    productList.push(new Product("Fenty Beauty Skinstick","Cheek","moisturizer"));
    productList.push(new Product("Ilia Color Haze pigment","Cheek","serum"));
    productList.push(new Product("Nars Bionser Powder","Cheek","powder"));
    productList.push(new Product("Nars Blush","Cheek","balm"));
    productList.push(new Product("Nars Liquid Brush","Cheek","balm"));

    //lip
    productList.push(new Product("Armani Liquid Lipstick Set","lips","sets"));
    productList.push(new Product("Fenty Beauty Mattemoiselle Lip Powder","lips","powder"));
    productList.push(new Product("Laneige Lip Sleeping Mask Moisturizer","lips","moisturizer"));
    productList.push(new Product("Sugar Fresh Advanced Lip Balm","lips","balm"));
    productList.push(new Product("Sugar Lip Balm","lips","balm"));
    productList.push(new Product("YS Lliquid Serum","lips","serum"));

    var length = productList.length;

    for (var i = 0; i < length; i++) {
        addProductCard(productList[i].name,productList[i].bodyPart, productList[i].productType);
    }
}

initialize();

var $productCardList = $('.product-card')
var productCardLength = $productCardList.length;
console.log(productCardLength)


function filterBodyPart(bodyPart){
    var filteredBodyPartList = new Array();

    if(bodyPart.toUpperCase() === "ALL"){
        $productCardList.each(function(){
            filteredBodyPartList.push(true);
        });
    }else{
        $productCardList.each(function(){
            $temp = $(this).find('#body-part')
            temp = $temp.text()
            if(bodyPart.toUpperCase() === temp.toUpperCase() ){
                filteredBodyPartList.push(true);
            }else{
                filteredBodyPartList.push(false);

            }
        });
    }
    return filteredBodyPartList;  
}
function filterProductType(productType){
    var filteredProductTypeList = new Array();

    if(productType.toUpperCase() === "ALL"){
        $productCardList.each(function(){
            filteredProductTypeList.push(true);
        });
    }else{
        $productCardList.each(function(){
            $temp = $(this).find('#product-type')
            temp = $temp.text()
            console.log(temp)
            if(productType.toUpperCase() === temp.toUpperCase() ){
                filteredProductTypeList.push(true);
            }else{
                filteredProductTypeList.push(false);

            }
        });
    }
    return filteredProductTypeList;  
}

var selectedBodyPart = "";
var selectedProductType = "";


document.getElementById('applyBtn').addEventListener('click', applySelection);

function applySelection(){
    selectedBodyPart = document.getElementById('bodypart').value;
    selectedProductType = document.getElementById('producttype').value;
    
    console.log(selectedBodyPart);
    console.log(selectedProductType);
    
    var listBodyPart = filterBodyPart(selectedBodyPart);
    var listProductType = filterProductType(selectedProductType);
    
    var counter = 0;
    $productCardList.each(function(){
        $temp = $(this).children(".product-details").children('#body-part')
        temp = $temp.text()
        if(listBodyPart[counter] == true &&  listProductType[counter] == true ){
            $(this).fadeIn("fast");
        }else{
            $(this).hide();
        }
        counter++;
    });
}
