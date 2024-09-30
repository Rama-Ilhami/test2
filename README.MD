npx sequelize-cli model:generate --name user --attributes username:string,email:string,password:string,image:string,age:integer

npx sequelize-cli model:generate --name kegiatan --attributes tanggal:string,tipe:string,shift:string,jam:integer,namaMesin:string,namaSparepart:string,kegiatan:string,proses:string


npx sequelize-cli db:migrate