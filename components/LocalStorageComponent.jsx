import React, { useEffect, useState } from "react";

const LocalStorageComponent = () => {

    const [memo, setMemo] = useState("")
    const [data, setData] = useState(false)

    const [listItems, setListItems] = useState([]);

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem("data")) || [];
        setListItems(items)
    }, [])


    const saveData = () => {
        const obj = { id: 5, name: `아무산`, addr: `충북`, memo: memo }
        const container = JSON.parse(localStorage.getItem("dataList")) || [];
        container.push(obj)
        localStorage.setItem("dataList", JSON.stringify(container));
        setMemo("");
    }

    const getData = () => {
        setData(true)
    }

    const updateData = () => {
    }
    
    const willDeleteId = 2;

    const deleteData = () => {
        const leftData = listItems.filter((item) => item.id !== willDeleteId);
        localStorage.setItem("dataList", JSON.stringify(leftData))
    }

    const deleteAllData = () => {
        localStorage.clear();
    }
    
    const onChange = (e) => {
        setMemo(e.target.value);
        setData(false);
    };

    return (
        <>
            <div>
                <input
                onChange={onChange}
                placeholder="내용을 입력해주세요"
                />
            </div>
            <br />
            <button onClick={getData}>불러오기</button> &nbsp;
            <button onClick={saveData}>저장</button> &nbsp;
            <button onClick={updateData}>수정</button> &nbsp;
            <button onClick={deleteData}>삭제</button> &nbsp;
            <button onClick={deleteAllData}>전부삭제</button> &nbsp;
            <br />

            { data ?
                listItems.map((item, idx) => (
                    <ul key={idx}>
                        <li>{item.name}</li>
                        <li>{item.memo}</li>
                    </ul>
                ))
                :
                <>없음</>
            }
        </>
    );
};

export default LocalStorageComponent;