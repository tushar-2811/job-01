import { Button } from "@/components/ui/button"
import axios from 'axios';
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import { Input } from "@/components/ui/input"

import { JobFormSchema } from '@/validators/Job'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useState } from "react"

import { useForm } from 'react-hook-form'
import {z} from 'zod'

interface Country {
  name: string;
  alpha2Code: string;
}

interface Jobs {
  id: string;
  name : string;
}

interface ExperienceLevelOption {
  value: string;
  label: string;
}

const experienceLevels: ExperienceLevelOption[] = [
  { value: 'entry', label: 'Entry Level' },
  { value: 'mid', label: 'Mid Level' },
  { value: 'senior', label: 'Senior Level' },
  { value: 'executive', label: 'Executive Level' },
  { value: 'intern', label: 'Internship' },
]


const JobFormComponent = () => {

  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<string>('');
  const [jobs, setJobs] = useState<Jobs[]>([]);
  const [selectedJob, setSelectedJob] = useState<string>('');
  const [selectedExperienceLevel, setSelectedExperienceLevel] = useState<string>('');
  // const [isLoading , setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get<Country[]>('https://restcountries.com/v2/all');
        setCountries(response.data);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    const fetchJobs = async () => {
      try {
        const {data} = await axios.get('http://localhost:9000/job-description');
        setJobs(data?.jobs);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    fetchJobs();     
    fetchCountries();
  } ,[])

  
  const handleCountryChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(event.target.value);
    
  };


  const handleJobChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedJob(event.target.value);
    
  };


  const handleExperienceLevelChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedExperienceLevel(event.target.value);
  };

    const form = useForm<z.infer<typeof JobFormSchema>>({
        resolver : zodResolver(JobFormSchema),
        defaultValues : {
            firstName : "",
            lastName : "",
            email : "",
            Country : selectedCountry   
        }
    })

  function onSubmit(data : z.infer<typeof JobFormSchema>) {
       console.log(data);
  }

  return (
    <div className="absolute " >
    <Card className="w-[450px]">

      <CardHeader>
        Enter Details
      </CardHeader>

    <CardContent>
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
      <FormField
        control={form.control}
        name="firstName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>First Name</FormLabel>
            <FormControl>
              <Input type="string" placeholder="Enter First Name" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

<FormField
        control={form.control}
        name="lastName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Last Name</FormLabel>
            <FormControl>
              <Input type="string" placeholder="Enter Last Name" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

<FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>E-mail</FormLabel>
            <FormControl>
              <Input type="string" placeholder="Enter E-mail" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      
      {/* country */}

      <div>
      <label>Select your country:</label>
      <select className="border-2 border-black px-2 py-2 rounded-md" value={selectedCountry} onChange={handleCountryChange}>
        <option value="">Select a country</option>
        {countries.map(country => (
          <option key={country.alpha2Code} value={country.name}>
            {country.name}
          </option>
        ))}
      </select>
    </div>


    <div>
      <label>Pick a Job:</label>
      <select className="border-2 border-black px-2 py-2 rounded-md mx-2" value={selectedJob} onChange={handleJobChange}>
        <option value="">Select a Job</option>
        {jobs.map(job => (
          <option key={job.id} value={job.name}>
            {job.name}
          </option>
        ))}
      </select>
    </div>

    <div>
      <label>Experience Level:</label>
      <select className="border-2 border-black px-2 py-2 rounded-md mx-2" id="experienceLevel" value={selectedExperienceLevel} onChange={handleExperienceLevelChange}>
        <option value="">Select experience level</option>
        {experienceLevels.map(level => (
          <option key={level.value} value={level.value}>
            {level.label}
          </option>
        ))}
      </select>
    </div>

      <Button className="bg-black" type="submit">Submit</Button>
    </form>
  </Form>
    </CardContent>
   
  </Card>
  </div>
  )
}

export default JobFormComponent
