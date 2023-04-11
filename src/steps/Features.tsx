import { Button, Form, Select, Typography } from "antd"
import { StepProps } from "../lib/types"
import { useNavigate } from "react-router-dom"
import StepLayout from "../components/StepLayout"
import { useContext } from "react"
import { StoreContext } from "../lib/provider"
import { validationMessages } from "../lib/handlers"
import { features } from "../lib/data"

const Features = ({ nextStep }: StepProps) => {
  const navigate = useNavigate()
  const [form] = Form.useForm()
  const [store, setStore] = useContext(StoreContext)

  const nextStepHandler = () => {
    navigate(`/${nextStep}`)
  };

  return (
    <StepLayout title="Features">
      <Form form={form} onFinish={nextStepHandler} validateMessages={validationMessages}>
        <div className="flex flex-col gap-3">
          <Typography>
            Hi {store.name}! Please select your desired features below.
          </Typography>
          <Form.Item label="Features" name="Features" rules={[{ required: true }]}>
            <Select mode="multiple" placeholder="Please select at least one feature" onChange={(e) => setStore({ ...store, selectedFeatures: e })} optionLabelProp="label">
              {features.map((feature, index) => (
                <Select.Option key={String(index)} label={feature.label} value={feature.value}>
                  {feature.label} - {feature.description}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
        </div>
        <div className="flex justify-end items-center gap-3">
          <Button onClick={() => navigate(`/`)}>Previous</Button>
          <Button htmlType="submit">Next</Button>
        </div>
      </Form>
    </StepLayout >
  )
}

export default Features
