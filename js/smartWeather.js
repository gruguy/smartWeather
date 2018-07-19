(function ($) {
    $.fn.extend({
        //插件名称 - smartWeather
        smartWeather: function (options) {
            //参数和默认值
            var defaults = {
                IP: '124.115.6.18',
                days: 4//最多7天
            };
            var options = $.extend(defaults, options);
            var _this = this;
            var url0 = 'http://api.k780.com:88/?app=weather.today&weaid=' + options.IP + '&appkey=16936&sign=1427eba47d8e0e71227698148a9527f9&format=json';
            //天气预报接口数据 未来5-7天
            var url1 = 'http://api.k780.com:88/?app=weather.future&weaid=' + options.IP + '&appkey=16936&sign=1427eba47d8e0e71227698148a9527f9&format=json';

            var imgUrl = 'img/weaIcons/';

            //获取今天天气数据
            $.ajax({
                url: url0,    //请求的url地址
                dataType: 'jsonp',   //返回格式为json
                jsonp: 'jsoncallback',
                type: "GET",   //请求方式
                success: function (res) {
                    //请求成功时处理
                    var data = res.result;
                    console.log(data);
                    //今天
                    var weather = data.weatid;
                    var tempature = data.temp_curr;
                    var weaIcon;
                    var nowH = new Date().getHours();
                    console.log(nowH);
                    //判断什么时候用晚上的图
                    switch (weather) {
                        case '1':
                            if (nowH > 17 || nowH < 7) {
                                weaIcon = imgUrl + '101.png';
                            } else {
                                weaIcon = imgUrl + '1.png';
                            }
                            break;
                        case '2':
                            if (nowH > 18 || nowH < 6) {
                                weaIcon = imgUrl + '201.png';
                            } else {
                                weaIcon = imgUrl + '2.png';
                            }
                            break;
                        case '3':
                            weaIcon = imgUrl + '3.png';
                            break;
                        case '4':
                        case '5':
                        case '6':
                            weaIcon = imgUrl + '4.png';
                            break;
                        case '7':
                            weaIcon = imgUrl + '5.png';
                            break;
                        case '8':
                            weaIcon = imgUrl + '6.png';
                            break;
                        case '9':
                            weaIcon = imgUrl + '7.png';
                            break;
                        case '10':
                        case '11':
                        case '12':
                        case '13':
                            weaIcon = imgUrl + '8.png';
                            break;
                        case '14':
                        case '15':
                            weaIcon = imgUrl + '9.png';
                            break;
                        case '16':
                            weaIcon = imgUrl + '10.png';
                            break;
                        case '17':
                        case '18':
                            weaIcon = imgUrl + '11.png';
                            break;
                        case '19':
                            weaIcon = imgUrl + '12.png';
                            break;
                        case '20':
                            weaIcon = imgUrl + '13.png';
                            break;
                        case '21':
                            weaIcon = imgUrl + '14.png';
                            break;
                        case '22':
                            weaIcon = imgUrl + '15.png';
                            break;
                        case '23':
                        case '24':
                        case '25':
                        case '26':
                            weaIcon = imgUrl + '16.png';
                            break;
                        case '27':
                            weaIcon = imgUrl + '10.png';
                            break;
                        case '28':
                        case '29':
                            weaIcon = imgUrl + '11.png';
                            break;
                        case '30':
                            weaIcon = imgUrl + '12.png';
                            break;
                        case '31':
                        case '32':
                        case '33':
                            weaIcon = imgUrl + '17.png';
                            break;
                        default:
                            weaIcon = imgUrl + '1.png';
                    }
                    data.weather_icon = weaIcon;
                    console.log(weaIcon);
                    var tIcons = $('<div class="tIcons"><img src="'+weaIcon+'"></div>');
                    var tempN = $('<div class="tempN">'+tempature+'</div>');
                    var city = $('<div class="city">'+data.citynm+'</div>');
                    $(_this).append(tIcons);
                    $(_this).append(tempN);
                    $(_this).append(city);
                },
                error: function () {
                    //请求出错处理
                    alert('请求数据出错!')
                }
            });
            //未来天气
            $.ajax({
                url: url1,    //请求的url地址
                dataType: 'jsonp',   //返回格式为json
                jsonp: 'jsoncallback',
                type: "GET",   //请求方式
                success: function (res) {
                    //请求成功时处理
                    var data = res.result;
                    var text='';
                    for (var i = 1; i < options.days; i++) {
                        var weather = data[i].weatid;
                        var tempature = data[0].temperature;
                        var weaIcon;
                        switch (weather) {
                            case '1':
                                weaIcon = imgUrl + '1.png';
                                break;
                            case '2':
                                weaIcon = imgUrl + '2.png';
                                break;
                            case '3':
                                weaIcon = imgUrl + '3.png';
                                break;
                            case '4':
                            case '5':
                            case '6':
                                weaIcon = imgUrl + '4.png';
                                break;
                            case '7':
                                weaIcon = imgUrl + '5.png';
                                break;
                            case '8':
                                weaIcon = imgUrl + '6.png';
                                break;
                            case '9':
                                weaIcon = imgUrl + '7.png';
                                break;
                            case '10':
                            case '11':
                            case '12':
                            case '13':
                                weaIcon = imgUrl + '8.png';
                                break;
                            case '14':
                            case '15':
                                weaIcon = imgUrl + '9.png';
                                break;
                            case '16':
                                weaIcon = imgUrl + '10.png';
                                break;
                            case '17':
                            case '18':
                                weaIcon = imgUrl + '11.png';
                                break;
                            case '19':
                                weaIcon = imgUrl + '12.png';
                                break;
                            case '20':
                                weaIcon = imgUrl + '13.png';
                                break;
                            case '21':
                                weaIcon = imgUrl + '14.png';
                                break;
                            case '22':
                                weaIcon = imgUrl + '15.png';
                                break;
                            case '23':
                            case '24':
                            case '25':
                            case '26':
                                weaIcon = imgUrl + '16.png';
                                break;
                            case '27':
                                weaIcon = imgUrl + '10.png';
                                break;
                            case '28':
                            case '29':
                                weaIcon = imgUrl + '11.png';
                                break;
                            case '30':
                                weaIcon = imgUrl + '12.png';
                                break;
                            case '31':
                            case '32':
                            case '33':
                                weaIcon = imgUrl + '17.png';
                                break;
                            default:
                                weaIcon = imgUrl + '1.png';
                        }
                        text +='<div class="row"><span class="week">'+data[i].week+'</span> <span class="tempS">'+data[i].temperature+'</span><span class="iconS"><img src="'+weaIcon+'"></span></div>';

                    }
                    var future = $('<div class="future"></div>');
                    future.html(text);
                    $(_this).append(future);

                },
                error: function () {
                    //请求出错处理
                    alert('请求数据出错!');
                }
            });

        }
    });
})(jQuery);