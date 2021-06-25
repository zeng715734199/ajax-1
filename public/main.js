let n = 1
console.log("我是handsome boy")
getPage.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('GET', `/page${n + 1}.json`)
    request.onreadystatechange = ()=>{
        if(request.readyState === 4){
            if(request.status >= 200 && request.status < 300){
                const array = JSON.parse(request.response)
                array.forEach(item => {
                    const li = document.createElement('li')
                    li.textContent = item.id
                    xxx.appendChild(li)
                });
                n += 1
            }else{alert("SB！你写错啦！")}
        }
    }
    request.send()
}
getJSON.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('GET', '/5.json')
    request.onreadystatechange = ()=>{
        if(request.readyState === 4){
            if(request.status >= 200 && request.status < 300){
                const object = JSON.parse(request.response)
                myName.textContent = object.name
            }else{alert("SB！你写错了")}
        }       
    }
    request.send()
}
getXML.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('GET', '/4.xml')
    request.onreadystatechange = ()=>{
        if(request.readyState === 4){
            if(request.status >= 200 && request.status < 300){
                const dom = request.responseXML
                const text = dom.getElementsByTagName('warning')[0].textContent
                console.log(text.trim())
            }else{
            alert("SB你写错了")
            }
        }
    }
    request.send()
}
getHTML.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('GET', '/3.html')
    request.onload = ()=>{
        console.log(request.response)
        const div = document.createElement('div')
        div.innerHTML = request.response
        console.log(div)
        document.body.appendChild(div)
    }
    request.onerror = ()=>{}
    request.send()
}
getJS.onclick =()=>{
    const request = new XMLHttpRequest()
    request.open('GET', '/2.js')
    request.onload = ()=>{
        const script = document.createElement('script')
        script.innerHTML = request.response
        document.body.appendChild(script)
    }
    request.onerror = ()=>{}
    request.send()
}
getCSS.onclick = ()=>{
const request = new XMLHttpRequest() ////readyState = 0
request.open('GET', '/style.css')   //readyState = 1
request.onreadystatechange = () => {
    if(request.readyState === 4){
        //下载完成，但是不知道是成功（状态码200-300之间），还是失败(状态码>400)
        if(request.status >= 200 && request.status < 300){
            const style = document.createElement('style')
            style.innerHTML = request.response
            document.head.appendChild(style)
        }else{
            alert("加载CSS失败")
        }
    }
}
request.send()
}