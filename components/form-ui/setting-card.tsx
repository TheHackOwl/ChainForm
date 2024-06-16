import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";

interface SettingCardProps {
  children: React.ReactNode;
  title: React.ReactNode | string;
}

export const SettingCard: React.FC<SettingCardProps> = ({
  children,
  title,
}) => {
  return (
    <Card isBlurred className="p-4">
      <CardHeader>
        {typeof title === "string" ? (
          <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        ) : (
          <>{title}</>
        )}
      </CardHeader>
      <div className="px-3">
        <Divider />
      </div>
      <CardBody>{children}</CardBody>
    </Card>
  );
};
