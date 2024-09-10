import { Card } from "@/components/ui/card";
import InputSearch from "./InputSearch";
import { ArrowRightIcon, LocateIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SearchSection() {
    return (
        <Card className="p-2 md:p-6">
            <p className="text-2xl font-bold">Get a ride</p>
            <InputSearch text="Pickup Location" icon={<LocateIcon />} />
            <InputSearch text="Dropoff Location" icon={<ArrowRightIcon />} />

            <Button className="w-full mt-5">Search</Button>
        </Card>
    )
}