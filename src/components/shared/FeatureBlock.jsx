import Icon from '../atomic/Icon';

const FeatureBlock = ({ feature }) => {
  return (
    <div className="text-center">
      <div className="flex justify-center mb-4">
        <Icon name={feature.icon} size={32} className="text-cyan-600" />
      </div>
      <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
      <p className="text-gray-600 text-sm">{feature.description}</p>
    </div>
  );
};

export default FeatureBlock;
