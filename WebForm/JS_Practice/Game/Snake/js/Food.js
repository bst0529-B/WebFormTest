//自調用函數---食物
(function () {

    //擺放創建的食物
    var elements = [];

    /**
     * 構造函數--食物
     * @param {any} x x座標
     * @param {any} y y座標
     * @param {any} width 寬
     * @param {any} height 高
     * @param {any} color 顏色
     */
    function Food(x, y, width, height, color) {
        this.x = x || 0;
        this.y = y || 0;
        this.width = width || 20;
        this.height = height || 20;
        this.color = color || "green";
    };

    //讓食物由區域變數提升為全域變數
    window.Food = Food;

    /**
     * 為原型添加方法---食物的初始化
     * @param {any} map 地圖
     */
    Food.prototype.Init = function (map) {
        remove();
        this.x = parseInt(Math.random() * map.offsetWidth / this.width) * this.width;
        this.y = parseInt(Math.random() * map.offsetHeight / this.height) * this.height;
        this.div = document.createElement("div");
        this.div.style.position = "absolute";
        this.div.style.width = this.width + "px";
        this.div.style.height = this.height + "px";
        this.div.style.backgroundColor = this.color;
        this.div.style.top = this.y + "px";
        this.div.style.left = this.x + "px";
        map.appendChild(this.div);
        elements.push(this.div);
    }

    //刪除創建的食物
    function remove() {
        for (var i = 0; i < elements.length; i++) {
            var ele = Element[i];
            ele.parentNode().removeChild(ele);
        }
    }
})();