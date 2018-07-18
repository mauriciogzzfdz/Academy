        fetch("/cars")
        .then((res) => {
            return res.json()
        })
        .then((cars) => {
            console.log(cars);

            const carsNames = cars.map((car) => {
                return {
                    name: car.name
                };



                
            })
        })