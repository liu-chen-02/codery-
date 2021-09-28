//反抖节流函数
export function debounce(fn, delay=50) {
    let timer;
    return function (...args) {
        
        if(timer){
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            timer = null;
            fn(...args)
        }, delay);
    }
}

