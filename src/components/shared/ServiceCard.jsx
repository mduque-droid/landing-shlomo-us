import Card from '../atomic/Card';
import Badge from '../atomic/Badge';
import Icon from '../atomic/Icon';

const ServiceCard = ({ service }) => {
  return (
    <Card className="h-full flex flex-col">
      <div className="flex items-center gap-3 mb-4">
        <Icon name={service.icon} size={28} className={`text-${service.color}-600`} />
        <Badge color={service.color}>{service.title}</Badge>
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
      <p className="text-gray-600 text-sm flex-grow">{service.description}</p>
      <p className="text-gray-500 text-xs mt-4 pt-4 border-t border-gray-100">
        {service.longDescription}
      </p>
    </Card>
  );
};

export default ServiceCard;
