'use strict';

import mongoose from 'mongoose';

const ParksSchema = mongoose.Schema({
  location: {type: String},
});

export default ('parks', ParksSchema);