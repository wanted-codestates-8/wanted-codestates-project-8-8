import React, { useEffect, useState } from "react";

const LocalStorageComponent = () => {

    const [memo, setMemo] = useState("")
    const [data, setData] = useState(false)

    const [listItems, setListItems] = useState([]);

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem("dataList")) || [];
        setListItems(items)
    }, [])

    const obj = { id: 3, name: `아무산`, addr: `충북`, tel:"000-000", memo: memo }

    const saveData = () => {
        const container = JSON.parse(localStorage.getItem("dataList")) || [];
        container.push(obj)
        localStorage.setItem("dataList", JSON.stringify(container));
        setMemo("");
    }

    const getData = () => {
        setData(true)
    }

    const willUpdateId = 2;

    const updateData = () => {
        const willUpdateData = listItems.filter((item) => item.id === willUpdateId);
        willUpdateData[0].memo = "update2";
        localStorage.setItem("dataList", JSON.stringify(listItems))
    }
    
    const willDeleteId = 3;

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