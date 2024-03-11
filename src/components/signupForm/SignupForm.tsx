'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { MoveRightIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';

import useToastModal from '@/hooks/useToastModal';
import { signup } from '@/lib/auth';
import { cn } from '@/lib/utils';
import { signupFormSchema } from '@/schema/signupFormSchema';

import FormNormalInput from '../inputs/formNormalInput/FormNormallnput';
import FormSelectInput from '../inputs/formSelectInput/FormSelectInput';
import { Button } from '../ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { Form } from '../ui/form';

import type { z } from 'zod';

export type SignupFormRegisterInput = z.infer<typeof signupFormSchema>;

const SignupForm = () => {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const { toast } = useToastModal();

  const signupForm = useForm<SignupFormRegisterInput>({
    resolver: zodResolver(signupFormSchema),
    mode: 'onChange',
    defaultValues: {
      username: '',
      email: '',
      phone: '',
      role: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = async (data: SignupFormRegisterInput) => {
    try {
      await signup(data);
      router.push('/');
      router.refresh();
    } catch (error) {
      if (error instanceof Error) toast.warning(error.message, 2000);
    }
  };

  const onClickSignupBtn = () => {
    const password = signupForm.getValues('password');
    const confirmPassword = signupForm.getValues('confirmPassword');
    if (password !== confirmPassword) {
      toast.warning('비밀번호가 일치하지 않습니다.', 800);
    }
  };

  const onClickNextStep = () => {
    signupForm.trigger(['username', 'email', 'phone', 'role']);

    const username = signupForm.getFieldState('username');
    const email = signupForm.getFieldState('email');
    const phone = signupForm.getFieldState('phone');
    const role = signupForm.getFieldState('role');

    if (username.invalid || !username.isDirty) {
      signupForm.setFocus('username');
      return;
    }
    if (email.invalid || !email.isDirty) {
      signupForm.setFocus('email');
      return;
    }
    if (phone.invalid || !phone.isDirty) {
      signupForm.setFocus('phone');
      return;
    }
    if (role.invalid || !role.isDirty) {
      signupForm.setFocus('role');
      return;
    }

    setStep(2);
  };

  const onClickPrevStep = () => {
    setStep(1);
  };

  const roleItemList = {
    관리자: '관리자',
    '일반 사용자': '일반 사용자',
  };

  return (
    <section className="translate-center w-[380px]">
      <Card>
        <CardHeader>
          <CardTitle>회원가입</CardTitle>
          <CardDescription>필수 정보를 입력해 주세요.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...signupForm}>
            <form
              onSubmit={signupForm.handleSubmit(onSubmit)}
              className="relative space-y-3 overflow-x-hidden"
            >
              <div
                className="space-y-3 transition-transform duration-300 "
                style={
                  step === 1
                    ? { transform: 'translateX(0) translateZ(0)' }
                    : { transform: 'translateX(-100%) translateZ(0)' }
                }
              >
                <FormNormalInput
                  control={signupForm.control}
                  name="username"
                  label="이름"
                  placeholder="홍길동"
                />
                <FormNormalInput
                  control={signupForm.control}
                  name="email"
                  label="이메일"
                  placeholder="example@example.com"
                />
                <FormNormalInput
                  control={signupForm.control}
                  name="phone"
                  label="연락처"
                  placeholder="010-1234-5678"
                />
                <FormSelectInput
                  control={signupForm.control}
                  name="role"
                  label="역할"
                  placeholder="역할을 선택해 주세요."
                  item={roleItemList}
                />
              </div>
              <div
                className="space-y-3 absolute top-0 left-0 right-0 transition-transform duration-300"
                style={
                  step === 1
                    ? { transform: 'translateX(100%) translateZ(0)' }
                    : { transform: 'translateX(0) translateZ(0)' }
                }
              >
                <FormNormalInput
                  control={signupForm.control}
                  name="password"
                  label="비밀번호"
                  placeholder="비밀번호를 입력해 주세요."
                  type="password"
                />
                <FormNormalInput
                  control={signupForm.control}
                  name="confirmPassword"
                  label="비밀번호 확인"
                  placeholder="비밀번호를 다시 입력해 주세요."
                  type="password"
                />
              </div>
              <div className="flex gap-2">
                <Button
                  type="submit"
                  className={cn({ hidden: step === 1 })}
                  onClick={onClickSignupBtn}
                >
                  계정 등록하기
                </Button>
                <Button
                  type="button"
                  className={cn({ hidden: step === 2 })}
                  onClick={onClickNextStep}
                >
                  다음 단계로
                  <MoveRightIcon className="w-4 h-4 ml-2" />
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  className={cn({ hidden: step === 1 })}
                  onClick={onClickPrevStep}
                >
                  이전 단계로
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </section>
  );
};

export default SignupForm;
