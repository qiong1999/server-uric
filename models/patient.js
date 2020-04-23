const Patient = require('../schemas/patient')
Patient.sync({
    force:false,
})