document.addEventListener ("DOMContentLoaded",()=>{
    
    // ul태그에 li태그~~
    const list = document.querySelector(".list-grid")
    const countEl = document.querySelector("#current-count")
    if (!list) return

    let result = ""
    listArray.forEach(item=>{
        result += `<li>
                        <a href="#">
                            <figure>
                                <img src="./img/${item.pThumnail}" alt="나중에 사진 변경해야함">
                            </figure>
                            <div class="list-option">
                                <span class="btn-heart">
                                    <img src="./img/icon-heart.svg" alt="좋아요버튼 하트아이콘">
                                </span>
                            </div>
                            <h4>${item.pName}</h4>    
                            <p class="fwr">${item.pDesc}</p>
                            <div class="price fwb">${item.pPrice.toLocaleString('ko-KR')}원</div>
                        </a>
                    </li>`
    })

    list.innerHTML = result
    if (countEl) countEl.textContent = listArray.length
})

