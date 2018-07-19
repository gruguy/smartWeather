(function ($) {
    $.fn.extend({
        //������� - smartWeather
        smartWeather: function (options) {
            //������Ĭ��ֵ
            var defaults = {
                IP: '124.115.6.18',
                days: 4//���7��
            };
            var options = $.extend(defaults, options);
            var _this = this;
            var url0 = 'http://api.k780.com:88/?app=weather.today&weaid=' + options.IP + '&appkey=16936&sign=1427eba47d8e0e71227698148a9527f9&format=json';
            //����Ԥ���ӿ����� δ��5-7��
            var url1 = 'http://api.k780.com:88/?app=weather.future&weaid=' + options.IP + '&appkey=16936&sign=1427eba47d8e0e71227698148a9527f9&format=json';

            var imgUrl = 'img/weaIcons/';

            //��ȡ������������
            $.ajax({
                url: url0,    //�����url��ַ
                dataType: 'jsonp',   //���ظ�ʽΪjson
                jsonp: 'jsoncallback',
                type: "GET",   //����ʽ
                success: function (res) {
                    //����ɹ�ʱ����
                    var data = res.result;
                    console.log(data);
                    //����
                    var weather = data.weatid;
                    var tempature = data.temp_curr;
                    var weaIcon;
                    var nowH = new Date().getHours();
                    console.log(nowH);
                    //�ж�ʲôʱ�������ϵ�ͼ
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
                    //���������
                    alert('�������ݳ���!')
                }
            });
            //δ������
            $.ajax({
                url: url1,    //�����url��ַ
                dataType: 'jsonp',   //���ظ�ʽΪjson
                jsonp: 'jsoncallback',
                type: "GET",   //����ʽ
                success: function (res) {
                    //����ɹ�ʱ����
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
                    //���������
                    alert('�������ݳ���!');
                }
            });

        }
    });
})(jQuery);