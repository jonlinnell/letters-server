module.exports = (sequelize, DataTypes) => sequelize.define('student', {
  regno: {
    type: DataTypes.STRING,
    primaryKey: true,
    unique: true,
    allowNull: false,
  },
  familyName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  forenames: {
    type: DataTypes.STRING,
  },
  title: {
    type: DataTypes.ENUM,
    values: [
      'Dr',
      'Mr',
      'Ms',
      'Miss',
      'Mrs',
      'Mx'
    ]
  },
  preferredName: {
    type: DataTypes.STRING
  },
  birthDate: {
    type: DataTypes.DATEONLY
  },
  gender: {
    type: DataTypes.ENUM,
    values: [
      'M',
      'F'
    ],
    allowNull: true,
  },
  feeStatus: {
    type: DataTypes.ENUM,
    values: [
      'UK',
      'International',
      'European Union',
    ],
  },
  termEmail: {
    type: DataTypes.STRING,
    validate: {
      isEmail: true,
    }
  },
  programmeCode: {
    type: DataTypes.STRING,
    validate: {
      is: /LLPT[0-9]{2}/
    }
  },
  programmeTitle: {
    type: DataTypes.STRING
  },
  versionNo: {
    type: DataTypes.INTEGER,
  },
  instanceNo: {
    type: DataTypes.INTEGER,
  },
  currPart: {
    type: DataTypes.STRING,
  },
  progLevel: {
    type: DataTypes.ENUM,
    values: [
      'Postgraduate Taught'
    ]
  },
  awardShortName: {
    type: DataTypes.ENUM,
    values: [
      'M.A.',
      'M.A./M.Sc.',
      'M.Res',
      'M.Sc.'
    ]
  },
  startDate: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  status1: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status2: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status3: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  progMethStud: {
    type: DataTypes.ENUM,
    values: [
      'Full Time',
      'Part Time'
    ]
  },
  routeStartPoint: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  routeSequence: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  rmBlkFltHome: {
    type: DataTypes.STRING,
  },
  homeAddressLine1: {
    type: DataTypes.STRING,
  },
  homeAddressLine2: {
    type: DataTypes.STRING,
  },
  homeAddressLine3: {
    type: DataTypes.STRING,
  },
  homeAddressLine4: {
    type: DataTypes.STRING,
  },
  homeAddressLine5: {
    type: DataTypes.STRING,
  },
  homeAddressLine6: {
    type: DataTypes.STRING,
  },
  homeEmail: {
    type: DataTypes.STRING,
    validate: {
      isEmail: true,
    }
  },
  homePhone: {
    type: DataTypes.STRING,
  },
  bedBuilding: {
    type: DataTypes.STRING,
  },
  bedFloor: {
    type: DataTypes.STRING,
  },
  bedRoomNo: {
    type: DataTypes.STRING,
  },
  bedSuffix: {
    type: DataTypes.STRING,
  },
  rmBlkFltTerm: {
    type: DataTypes.STRING,
  },
  termAddressLine1: {
    type: DataTypes.STRING,
  },
  termAddressLine2: {
    type: DataTypes.STRING,
  },
  termAddressLine3: {
    type: DataTypes.STRING,
  },
  termAddressLine4: {
    type: DataTypes.STRING,
  },
  termAddressLine5: {
    type: DataTypes.STRING,
  },
  termAddressLine6: {
    type: DataTypes.STRING,
  },
  termEndDate: {
    type: DataTypes.STRING,
  },
  termPhone: {
    type: DataTypes.STRING,
  },
  mobilePhone: {
    type: DataTypes.STRING,
  },
  nationalityDesc: {
    type: DataTypes.STRING,
  },
})
