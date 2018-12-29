const { db, Student, Campus } = require('./server/db');
const { green, red } = require('chalk');

const seed = async () => {
  await db.sync({ force: true });

  // seed your database here!
  const students = [
    {
      firstName: 'Emily',
      lastName: 'Quinn',
      email: 'equinn@email.com',
      gpa: 3.7,
      campusId: 1,
    },
    {
      firstName: 'Michelle',
      lastName: 'Urena',
      email: 'murena@email.com',
      gpa: 3.9,
      campusId: 1,
    },
    {
      firstName: 'Camryn',
      lastName: 'Pearson',
      email: 'cpearson@email.com',
      gpa: 3.9,
      campusId: 2,
    },
    {
      firstName: 'Laura',
      lastName: 'Waters',
      email: 'lwaters@email.com',
      gpa: 4.0,
      campusId: 2,
    },
    {
      firstName: 'Elizabeth',
      lastName: 'Kosowski',
      email: 'ekosowski@email.com',
      gpa: 3.9,
      campusId: 3,
    },
    {
      firstName: 'Siri',
      lastName: 'McClean',
      email: 'smcclean@email.com',
      gpa: 3.5,
    },
  ];

  const campuses = [
    {
      name: 'NY - Grace Hopper',
      address: '5 Hanover Square',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu aliquam orci. Fusce lobortis blandit orci vel ullamcorper. Phasellus sagittis orci sit amet accumsan placerat. Integer id nisi ac risus placerat iaculis. Sed placerat, sem vitae condimentum blandit, turpis ligula gravida diam, eget vestibulum ante risus eu sapien.',
    },
    {
      name: 'CHI - Grace Hopper',
      address: '88 Chicago Drive',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu aliquam orci. Fusce lobortis blandit orci vel ullamcorper. Phasellus sagittis orci sit amet accumsan placerat. Integer id nisi ac risus placerat iaculis. Sed placerat, sem vitae condimentum blandit, turpis ligula gravida diam, eget vestibulum ante risus eu sapien.',
    },
    {
      name: 'CA - Grace Hopper',
      address: '007 Cali Road',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu aliquam orci. Fusce lobortis blandit orci vel ullamcorper. Phasellus sagittis orci sit amet accumsan placerat. Integer id nisi ac risus placerat iaculis. Sed placerat, sem vitae condimentum blandit, turpis ligula gravida diam, eget vestibulum ante risus eu sapien.',
    },
  ];
  await db.sync({ force: true });

  await Promise.all([
    Campus.bulkCreate(campuses, { returning: true }),
    Student.bulkCreate(students, { returning: true }),
  ]);

  // await Promise.all(
  //   campuses.map(campus => Campus.create(campus)),
  //   students.map(student => Student.create(student))
  // );

  console.log(green('Seeding success!'));
  db.close();
};

seed().catch(err => {
  console.error(red('Oh noes! Something went wrong!'));
  console.error(err);
  db.close();
});
