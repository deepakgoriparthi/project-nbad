import mongoose from 'mongoose';

const chartDataSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    enum: ['funding', 'impact']
  },
  title: {
    type: String,
    required: true
  },
  value: {
    type: Number,
    required: true
  },
  name: String // for impact chart
});

export default mongoose.model('ChartData', chartDataSchema);