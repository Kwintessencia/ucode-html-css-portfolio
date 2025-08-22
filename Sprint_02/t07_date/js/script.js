function getFormattedDate(dateObj){
    let date = new Date(dateObj);
    if(date.getMonth()<10){
      month = `0${(date.getMonth()+1)}`;
    }else{
       month = (date.getMonth()+1);
    }

    if(date.getDate()<10){
        dateDay = `0${date.getDate()}`;
    }else{
        dateDay = date.getDate();
    }

    if(date.getHours()<10){
        hours = `0${date.getHours()}`;
    }else{
        hours = date.getHours();
    }

    if(date.getMinutes()<10){
        minutes = `0${date.getMinutes()}`;
    }else{
        minutes = date.getMinutes();
    }

    let day = [
    'Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

    year = date.getFullYear();

    return `${dateDay}.${month}.${year} ${hours}:${minutes} ${day[date.getDay()]}`
}