-- CreateTable
CREATE TABLE "User" (
    "id" UUID NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "image" TEXT,
    "emailVerified" TIMESTAMP(3),
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "total_time" INTEGER,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL,
    "userId" UUID NOT NULL,
    "type" TEXT NOT NULL DEFAULT 'oauth',
    "provider" TEXT NOT NULL DEFAULT 'google',
    "providerAccountId" TEXT NOT NULL,
    "access_token" TEXT,
    "refresh_token" TEXT,
    "expires_at" INTEGER,
    "scope" TEXT,
    "token_type" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Questions" (
    "id" SERIAL NOT NULL,
    "question_text" TEXT NOT NULL,
    "correct_answer" INTEGER NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "password" TEXT NOT NULL,
    "option_a" TEXT NOT NULL,
    "option_b" TEXT NOT NULL,
    "option_c" TEXT NOT NULL,
    "option_d" TEXT NOT NULL,

    CONSTRAINT "Questions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Stamps" (
    "id" SERIAL NOT NULL,
    "user_id" UUID NOT NULL,
    "questions_id" INTEGER NOT NULL,
    "obtained" BOOLEAN NOT NULL DEFAULT false,
    "obtained_at" TIMESTAMPTZ(6),

    CONSTRAINT "Stamps_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StampRallyLog" (
    "id" SERIAL NOT NULL,
    "user_id" UUID NOT NULL,
    "start_time" TIMESTAMPTZ(6) NOT NULL,
    "end_time" TIMESTAMPTZ(6),
    "duration_sec" INTEGER,
    "is_completed" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "StampRallyLog_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON "Account"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "Questions_password_key" ON "Questions"("password");

-- CreateIndex
CREATE UNIQUE INDEX "Stamps_id_key" ON "Stamps"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Stamps_user_id_questions_id_key" ON "Stamps"("user_id", "questions_id");

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Stamps" ADD CONSTRAINT "Stamps_questions_id_fkey" FOREIGN KEY ("questions_id") REFERENCES "Questions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Stamps" ADD CONSTRAINT "Stamps_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StampRallyLog" ADD CONSTRAINT "StampRallyLog_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
