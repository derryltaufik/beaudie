class Product {
    constructor(name,productType) {
        this.name = name;
        this.productType = productType;
    }
}

var productList = new Array();

function addProductCard(name, productType){

    var price = 'Rp' + (Math.floor(Math.random() * 99)+1) + '9.900';
    var imgSource = './assets/skincare/' + name + '.jpg';
    var $productList = $('.product-list');
    var $productCard = $('').add('<div class="product-card"></div>');
    var $productImage = $('').add('<div class="product-image"> <img src="' + imgSource + '" alt=""></div>');
    var $productDetail = $('').add('<div class="product-details"><h4><a href="">' + name  + '<span id="product-type" class="product-tag">'+ productType+ '</span><div class="product-bottom-details"><div class="product-price">' + price + '</div><div class="product-atc"><button> ADD TO CART</button></div></div></div>');
    $productCard.append($productImage);
    $productCard.append($productDetail);
    $productList.append($productCard);
}


function initialize(){
    // mask
    productList.push(new Product("laneige Mask","mask"));
    productList.push(new Product("GLAMGLOW charcoal mask","mask"));
    productList.push(new Product("summer fridays mask","mask"));
    // moisturizer
    productList.push(new Product("belif moisturizer","moisturizer"));
    productList.push(new Product("Drunk Elephant Moisturizer","moisturizer"));
    productList.push(new Product("kiehls facial cream","moisturizer"));
    //treatment
    productList.push(new Product("Dr Dennis Gross Skincare","treatment"));
    productList.push(new Product("OLEHENRIKSEN VitC serum","treatment"));
    productList.push(new Product("The Ordinary Hyaluronic Acid","treatment"));
    //cleanser
    productList.push(new Product("Farmacy Green Clean","cleanser"));
    productList.push(new Product("philosophy Purity Cleanser","cleanser"));
    productList.push(new Product("TATCHA cleanser","cleanser"));


    var length = productList.length;

    for (var i = 0; i < length; i++) {
        addProductCard(productList[i].name, productList[i].productType);
    }
}


initialize();

var $productCardList = $('.product-card')
var productCardLength = $productCardList.length;
console.log(productCardLength)

function filterProductType(productType){
    var filteredProductTypeList = new Array();

    if(productType.toUpperCase() === "ALL"){
        $productCardList.each(function(){
            filteredProductTypeList.push(true);
        });
    }else{
        $productCardList.each(function(){
            console.log($(this));
            $temp = $(this).find('#product-type');
            temp = $temp.text()
            console.log(temp);
            if(productType.toUpperCase() === temp.toUpperCase() ){
                
                filteredProductTypeList.push(true);
            }else{
                filteredProductTypeList.push(false);

            }
        });
    }
    return filteredProductTypeList;  
}

var selectedProductType = "";


document.getElementById('applyBtn').addEventListener('click', applySelection);

function applySelection(){
    selectedProductType = document.getElementById('producttype').value;
    console.log(selectedProductType);
    var listProductType = filterProductType(selectedProductType);
    
    var counter = 0;
    $productCardList.each(function(){
        $temp = $(this).children(".product-details").children('#product-type')
        temp = $temp.text()
        if(listProductType[counter] == true ){
            $(this).fadeIn("fast");
        }else{
            $(this).hide();
        }
        counter++;
    });
}
