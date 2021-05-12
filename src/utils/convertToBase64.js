const fileTypes = ['jpg', 'jpeg', 'png'];  //acceptable file types

const convertToBase64 = (e) => {
    const file = e.target.files[0];
    if (file) {
        return new Promise((resolve, reject) => {
            let extension = file.name.split('.').pop().toLowerCase();
            const fileReader = new FileReader();
            if (fileTypes.indexOf(extension) > -1){
                fileReader.readAsDataURL(file);
                fileReader.onload = () => {
                    resolve(fileReader.result);
                }
                fileReader.onerror = (error) => {
                    reject(error);
                }
            }else{
                resolve(null);
            }
        });
    }
}

export default convertToBase64;