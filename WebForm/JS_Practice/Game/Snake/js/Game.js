//自調用函數---遊戲
(function () {

    //存放遊戲構造函數
    var that = null;

    /**
     * 構造函數--遊戲
     * @param {any} map
     */
    function Game(map) {
        this.food = new window.Food;
        this.snake = new window.Snake;
        this.map = map;
        that = this;
    };

    //讓遊戲構造函數由區域變數提升為全域變數
    window.Game = Game;

    /**為原型添加方法---遊戲的初始化 */
    Game.prototype.Init = function () {
        this.food.Init(this.map);
        this.snake.Init(this.map)
        this.runSnake(this.map, this.food);
        this.bindKey();
    }

    /**
     * 為原型添加方法---讓小蛇連續移動並判斷結束條件
     * @param {any} map 地圖
     * @param {any} food 食物
     */
    Game.prototype.runSnake = function (map, food) {
        var timerId = window.setInterval(function () {
            this.snake.Move(map, food);
            this.snake.Init(map);

            var maxX = map.offsetWidth / this.snake.width;
            var maxY = map.offsetHeight / this.snake.height;
            var headX = this.snake.body[0].x;
            var headY = this.snake.body[0].y;
            if (headX < 0 || headX >= maxX || headY < 0 || headY >= maxY) {
                window.clearInterval(timerId);
                alert("遊戲結束");
            }
            for (var i = 1; i < this.snake.body.length; i++) {
                if (headX == this.snake.body[i].x && headY == this.snake.body[i].y) {
                    window.clearInterval(timerId);
                    alert("遊戲結束");
                }
            }
        }.bind(that), 100);
    };

    /**為原型添加方法---讓上下左右鍵控制小蛇行進方向 */
    Game.prototype.bindKey = function () {
        document.onkeydown = function (e) {
            switch (e.keyCode) {
                case 37: this.snake.direction != "right" ? this.snake.direction = "left" : this.snake.direction; break;
                case 38: this.snake.direction != "bottom" ? this.snake.direction = "top" : this.snake.direction; break;
                case 39: this.snake.direction != "left" ? this.snake.direction = "right" : this.snake.direction; break;
                case 40: this.snake.direction != "top" ? this.snake.direction = "bottom" : this.snake.direction; break;
            }
        }.bind(that);
    };
})();