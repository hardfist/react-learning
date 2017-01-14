var options = {}
options.obj=`[{"link":"http://115.28.214.69/jump/jump.php?uk=4249922252&shareid=1991260572","link/_text":"鬼怪 2016 同步连载","num_number":1,"num_number/_source":"1"},{"link":"http://115.28.214.69/jump/jump.php?uk=2084488645&shareid=1145242593","link/_text":"《孤单又灿烂的神：G怪》2016.同步连载","num_number":3,"num_number/_source":"3"},{"link":"http://115.28.214.69/jump/jump.php?uk=2084488645&shareid=3076334651","link/_text":"《孤单又灿烂的神：G怪》2016.同步连载","num_number":5,"num_number/_source":"5"},{"link":"http://115.28.214.69/jump/jump.php?uk=4249922252&shareid=3494239083","link/_text":"明星大侦探第二季.2017同步连载","num_number":7,"num_number/_source":"7"},{"link":"http://115.28.214.69/jump/jump.php?uk=2084488645&shareid=4277748940","link/_text":"《孤芳不自赏》2017.同步TV","num_number":9,"num_number/_source":"9"},{"link":"http://115.28.214.69/jump/jump.php?uk=4249922252&shareid=3757116644","link/_text":"三S爷的剑 2016.HD720P.国语中字.mp4","num_number":11,"num_number/_source":"11"},{"link":"http://115.28.214.69/jump/jump.php?uk=2084488645&shareid=1987557497","link/_text":"《遇见爱情的利先生》2017.同步TV","num_number":13,"num_number/_source":"13"},{"link":"http://115.28.214.69/jump/jump.php?uk=2084488645&shareid=2124506619","link/_text":"昆仑阙之前世今生2017.同步网络","num_number":15,"num_number/_source":"15"},{"link":"http://115.28.214.69/jump/jump.php?uk=2084488645&shareid=1677507894","link/_text":"痞子电影2017.同步连载","num_number":17,"num_number/_source":"17"},{"link":"http://115.28.214.69/jump/jump.php?uk=2084488645&shareid=180323831","link/_text":"《真正N子汉2》2016.同步TV","num_number":19,"num_number/_source":"19"},{"link":"http://115.28.214.69/jump/jump.php?uk=168713112&shareid=1740539106","link/_text":"三少爷的剑.2016.1080P国语中字","num_number":21,"num_number/_source":"21"},{"link":"http://115.28.214.69/jump/jump.php?uk=2084488645&shareid=3455095165","link/_text":"守护丽人2017.同步TV","num_number":23,"num_number/_source":"23"},{"link":"http://115.28.214.69/jump/jump.php?uk=2084488645&shareid=3710353389","link/_text":"《恶Z剧之吻》2016.同步网络","num_number":25,"num_number/_source":"25"},{"link":"http://115.28.214.69/jump/jump.php?uk=2084488645&shareid=1416734055","link/_text":"《最强大脑4》2017.同步TV","num_number":27,"num_number/_source":"27"},{"link":"http://115.28.214.69/jump/jump.php?uk=4249922252&shareid=4087088149","link/_text":"恶作剧之吻 2016同步连载","num_number":29,"num_number/_source":"29"}]&&&0`
var arr = options.obj.split('&&&')
console.log(arr)
var items = JSON.parse(arr[0])
items = items.map(function(item){
    for(var key in item){
        item[key] = decodeURIComponent(item[key])
    }
    return item
})
var idx = parseInt(arr[1])
console.log(items[idx]["link/_text"])

remenstr: JSON.stringify(res.data.results.map(function(item){
    for(var key in item){
        item[key] = encodeURIComponent(item[key])
    }
    return item 
}))
