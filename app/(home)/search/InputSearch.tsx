"use client";

import { useState } from "react";
import GooglePlacesAutocomplete, { geocodeByPlaceId } from 'react-google-places-autocomplete';
import { Icon } from "lucide-react";

type Option = {
    label: string;
    value: string;
};

export default function InputSearch({ text, icon }: { text: string, icon: React.ReactNode }) {
    const [selectedPlace, setSelectedPlace] = useState<Option | null>(null);

    const handlePlaceSelect = (newValue: Option | null) => {
        setSelectedPlace(newValue);
        if (newValue) {
            geocodeByPlaceId(newValue.value).then((results) => {
                console.log("Selected place details:", results);
            });
        }
    };

    return (
        <div className="relative mt-2">
            <Icon iconNode={[]} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">{icon}</Icon>
            <GooglePlacesAutocomplete
                apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY}
                selectProps={{
                    value: selectedPlace,
                    onChange: handlePlaceSelect,
                    placeholder: text,
                    className: "pl-10",
                    components: {
                        DropdownIndicator: () => null,
                        IndicatorSeparator: () => null
                    },
                    styles: {
                        control: (provided) => ({
                            ...provided,
                            paddingLeft: '2.5rem',
                        }),
                    },
                }}
            />
        </div>
    )
}

{/* <GooglePlacesAutocomplete
apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY}
selectProps={{
    value,
    onChange: setValue,
  }}
/> */}

{/* <Icon iconNode={[]} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">{icon}</Icon> */ }

