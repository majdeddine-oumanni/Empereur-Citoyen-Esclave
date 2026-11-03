export function setData(key, data){
    localStorage.setItem(key ,JSON.stringify(data));
}

export function getData(key){
    let data =  localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
}

