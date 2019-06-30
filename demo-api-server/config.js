process.env.MONGODB_URL = "mongodb://osoc:osoc4thewin$@ds343887.mlab.com:43887/open-rec-osoc";
process.env.PORT = 3000;


console.log(`
configging -->
  MONGODB_URL: ${process.env.MONGODB_URL}
  PORT: ${process.env.PORT}
`);