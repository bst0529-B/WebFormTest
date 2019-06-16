//自調用函數---小蛇
(function () {
    //擺放創建的小蛇身體
    var elements = [];

    //存放小蛇構造函數
    var that=null;

    /**
     * 構造函數--小蛇
     * @param {any} width 寬
     * @param {any} height 高
     * @param {any} direction 方向
     */
    function Snake(width, height, direction) {
        this.width = width || 20;
        this.height = height || 20;
        this.direction = direction || "right";
        this.body = [
            { x: 3, y: 2, color: "red" },//蛇頭
            { x: 2, y: 2, color: "yellow" },//蛇身
            { x: 1, y: 2, color: "yellow" },//蛇身
        ];
        that = this;
    };

    //讓小蛇構造函數由區域變數提升為全域變數
    window.Snake = Snake;

    /**
     * 為原型添加方法---小蛇的初始化
     * @param {any} map 地圖
     */
    Snake.prototype.Init = function (map) {
        //刪除之前的小蛇
        remove();

        //顯示小蛇
        for (var i = 0; i < this.body.length; i++) {
            var obj = this.body[i];
            var div = document.createElement("div");
            div.style.position = "absolute";
            div.style.width = this.width + "px";
            div.style.height = this.height + "px";
            div.style.top = obj.y * this.height + "px";
            div.style.left = obj.x * this.width + "px";
            div.style.backgroundColor = obj.color;
            map.appendChild(div);
            elements.push(div);
        }
    };

    /**
     * 小蛇移動
     * @param {any} map 地圖
     * @param {any} food 食物
     */
    Snake.prototype.Move = function (map, food) {
        //移動
        var i = this.body.length - 1;
        for (; i > 0; i--) {
            this.body[i].x = this.body[i - 1].x;
            this.body[i].y = this.body[i - 1].y;
        }
        switch (this.direction) {
            case "right": this.body[0].x += 1; break;
            case "bottom": this.body[0].y += 1; break;
            case "left": this.body[0].x -= 1; break;
            case "top": this.body[0].y -= 1; break;
        }

        //小蛇吃到食物
        var headX = this.body[0].x * this.width;
        var headY = this.body[0].y * this.height;
        if (headX == food.x && headY == food.y) {
            var last = this.body[this.body.length - 1];
            this.body.push({
                x: last.x,
                y: last.y,
                color: last.color
            });
            food.Init(map);
        }
    }

    //刪除創建的小蛇
    function remove() {
        var i = elements.length - 1;
        for (; i >=0; i--) {
            var ele = elements[i];
            ele.parentNode.removeChild(ele);
            elements.splice(i, 1);
        }
    }
})();