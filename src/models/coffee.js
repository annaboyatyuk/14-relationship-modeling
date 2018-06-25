'use strict';

import mongoose, {Schema} from 'mongoose';

const CoffeeSchema = mongoose.Schema({
  name: {type:String, required:true},
  roast: {type:String, required:true},
  coffee: {type:String, required:true},
  parks: {type: Schema.Types.ObjectId, ref: 'Parks'},
});

export default mongoose.model('coffee', CoffeeSchema);

